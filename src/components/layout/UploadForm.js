import React, { useState } from 'react';
import Error from './Error';

const UploadForm = () => {
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setError(null);
    } else {
      setError('Please select an image');
      setTimeout(() => setError(null), 3000);
    }

    console.log(selected);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='upload-form'>
      <form onSubmit={onSubmit}>
        <label htmlFor='upload'>You can upload images here</label>
        <input type='file' name='pic' id='upload' onChange={changeHandler} />
      </form>
      {error && <Error message={error} />}
    </div>
  );
};

export default UploadForm;
