import React, { useContext, useState } from 'react';
import ImagesContext from '../../context/images/ImageContext';
import Error from './Error';
import '../../styles/UploadForm.scss';

const UploadForm = () => {
  const [desc, setDesc] = useState('');
  const imagesContext = useContext(ImagesContext);
  const { uploadPic, error, setError, file, setFile } = imagesContext;

  const types = ['image/png', 'image/jpeg'];
  const onSubmit = (e) => {
    e.preventDefault();
    if (!desc) {
      console.log('desc Error');
      setError('Please write a description');
      setTimeout(() => setError(null), 3000);
      return;
    } else if (!file) {
      console.log('file Error');
      setError(
        'Please add a file that you want to upload (it has to be a picture)'
      );
      setTimeout(() => setError(null), 3000);
    } else {
      uploadPic(file, desc);
    }
  };

  const fileHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setError('Please select an image');
      setTimeout(() => setError(null), 3000);
    }
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  return (
    <div className='upload-form'>
      <form onSubmit={onSubmit}>
        <label htmlFor='file'>You can upload images here</label>
        <input type='file' name='pic' id='file' onChange={fileHandler} />
        <label htmlFor='description'>You can upload images here</label>
        <textarea
          name='description'
          id='description'
          onChange={descHandler}
        ></textarea>
        <button type='submit'>Upload</button>
      </form>
      {error && <Error message={error} />}
    </div>
  );
};

export default UploadForm;
