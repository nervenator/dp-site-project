import React, { useReducer } from 'react';
import imageContext from './ImageContext';
import imageReducer from './imageReducer';
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from '../../firebase/config';
import { CLEAR_ERRORS, PROGRESS_CHANGE, IMAGE_ERROR, SET_FILE } from '../types';

const ImageState = (props) => {
  const initialState = {
    file: null,
    error: null,
    progress: null,
    url: null,
    image: null,
  };

  const [state, dispatch] = useReducer(imageReducer, initialState);

  // Upload pic to firebase storage and add (url, date of creation, description, name of file) to firestore

  const uploadPic = (file, description) => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        dispatch({ type: PROGRESS_CHANGE, payload: percentage });
      },
      (err) => {
        dispatch({ type: IMAGE_ERROR, payload: err });
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        console.log(url, createdAt);
        await collectionRef.add({
          url,
          createdAt,
          description,
          name: file.name,
        });
      }
    );
  };

  // Delete pic from firestore and delete from firebase storage

  const deletePic = async (name, id) => {
    const storageRef = projectStorage.ref(name);
    const dbDocRef = projectFirestore.collection('images').doc(id);
    console.log(name);
    try {
      await dbDocRef.delete();
      await storageRef.delete();
    } catch (error) {
      console.error(error);
    }
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  const setError = (error) => dispatch({ type: IMAGE_ERROR, payload: error });
  const setFile = (file) => dispatch({ type: SET_FILE, payload: file });

  return (
    <imageContext.Provider
      value={{
        file: state.file,
        progress: state.progress,
        url: state.url,
        error: state.error,
        clearErrors,
        uploadPic,
        setError,
        setFile,
        deletePic,
      }}
    >
      {props.children}
    </imageContext.Provider>
  );
};

export default ImageState;
