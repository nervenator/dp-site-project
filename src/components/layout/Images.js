import React, { useState, useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import ImageItem from './ImageItem';
import ImageForm from './ImageForm';
import UploadForm from './UploadForm';
import Modal from '../layout/Modal';
import image1 from '../../pictures/dppainting1.jpg';
import image2 from '../../pictures/dppainting2.jpg';
import image3 from '../../pictures/dppainting3.jpg';

const Images = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState('');
  const clickHandler = (event) => {
    if (event.target.tagName === 'IMG') {
      setImage(event.target.src);
      setModal(true);
    } else if (event.target.id === 'myModal') {
      setModal(false);
    }
  };
  return (
    <Fragment>
      {isAuthenticated && <UploadForm />}
      <div className='gallery-container' onClick={clickHandler}>
        {modal && (
          <Modal>
            <ImageForm image={image} />
          </Modal>
        )}
        <ImageItem src={image1} desc='Image description' />
        <ImageItem src={image2} desc='Image description' />
        <ImageItem src={image3} desc='Image description' />
      </div>
    </Fragment>
  );
};

export default Images;
