import React, { useContext } from 'react';
import ImagesContext from '../../context/images/ImageContext';
import AuthContext from '../../context/auth/AuthContext';
import '../../styles/ImageItem.scss';

const ImageItem = (props) => {
  const imagesContext = useContext(ImagesContext);
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;
  const { deletePic } = imagesContext;
  const onClick = () => {
    deletePic(props.name, props.id);
  };

  return (
    <div className='image-item'>
      <img src={props.src} alt='' />
      <p>{props.desc}</p>
      {isAuthenticated && <button onClick={onClick}>Delete image</button>}
    </div>
  );
};

export default ImageItem;
