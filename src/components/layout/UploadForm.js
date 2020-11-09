import React, { useContext } from 'react';
import ImagesContext from '../../context/images/ImageContext';
import Error from './Error';

const UploadForm = () => {
  const imagesContext = useContext(ImagesContext);
  const { upload, error, setError } = imagesContext;

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      upload(selected);
      setError(null);
    } else {
      setError('Please select an image');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className='upload-form'>
      <form>
        <label htmlFor='upload'>You can upload images here</label>
        <input type='file' name='pic' id='upload' onChange={changeHandler} />
      </form>
      {error && <Error message={error} />}
    </div>
  );
};

export default UploadForm;
