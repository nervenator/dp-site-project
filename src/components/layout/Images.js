import React, { useState, useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import UseFirestore from '../../hooks/UseFirestore';
import ImageItem from './ImageItem';
import ImageForm from './ImageForm';
import UploadForm from './UploadForm';
import Modal from '../layout/Modal';

const Images = () => {
  const images = UseFirestore('images').docs;
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
        {images &&
          images.map((image) => {
            return (
              <ImageItem
                key={image.id}
                id={image.id}
                src={image.url}
                desc={image.description}
                name={image.name}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default Images;
