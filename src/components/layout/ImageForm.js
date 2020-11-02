import React from 'react';
import '../../styles/ImageForm.scss';

const ImageForm = (props) => {
  return (
    <div className='image-form'>
      <img src={props.image} alt='' className='fullpic' />
    </div>
  );
};

export default ImageForm;
