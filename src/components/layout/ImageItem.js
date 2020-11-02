import React from 'react';
import '../../styles/ImageItem.scss';

const ImageItem = (props) => {
  return (
    <div className='image-item'>
      <img src={props.src} alt='' />
      <p>{props.desc}</p>
    </div>
  );
};

export default ImageItem;
