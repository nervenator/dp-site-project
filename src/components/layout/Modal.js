import React from 'react';
import '../../styles/Modal.scss';

const Modal = (props) => {
  return (
    <div id='myModal' className='modal'>
      <div className='modal-content'>{props.children}</div>
    </div>
  );
};

export default Modal;
