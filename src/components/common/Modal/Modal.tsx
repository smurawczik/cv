import React, { useState, useEffect } from 'react';

import classes from './Modal.module.scss';

const Modal:React.FC<any> = ({ open, children, onClose }) => {

  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onEscKeyPress = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      closingModal();
    }
  }

  const closingModal = () => {
    setIsOpen(false);
    onClose();
  }

  useEffect(() => {
    document.addEventListener("keydown", onEscKeyPress);

    return () => {
      document.removeEventListener("keydown", onEscKeyPress);
    }
  });

  return (
    <div className={classes.modalBackdrop} onClick={(e) => {
        if (e.target === e.currentTarget) {
          closingModal();
        }
      }} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={classes.modal}>
        <div className={classes.closeModal} onClick={closingModal}>&times;</div>
        {children}
      </div>
    </div>
  )
};

export default Modal;