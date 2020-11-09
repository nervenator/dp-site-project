import React, { useReducer } from 'react';
import imageContext from './ImageContext';
import imageReducer from './imageReducer';
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from '../../firebase/config';
import { CLEAR_ERRORS, PROGRESS_CHANGE, IMAGE_ERROR, SET_URL } from '../types';

const ImageState = (props) => {
  const initialState = {
    file: null,
    error: null,
    progress: null,
    url: null,
  };

  const [state, dispatch] = useReducer(imageReducer, initialState);

  const upload = (file) => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        dispatch({ type: PROGRESS_CHANGE, percentage });
      },
      (err) => {
        dispatch({ type: IMAGE_ERROR, err });
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        console.log(url, createdAt);
        collectionRef.add({ url, createdAt });
        dispatch({ type: SET_URL, url });
      }
    );
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  const setError = () => dispatch({ type: IMAGE_ERROR });

  return (
    <imageContext.Provider
      value={{
        file: state.file,
        progress: state.progress,
        url: state.url,
        error: state.error,
        clearErrors,
        upload,
        setError,
      }}
    >
      {props.children}
    </imageContext.Provider>
  );
};

export default ImageState;
