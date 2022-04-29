import React from 'react';
import Modal from '@mui/material/Modal';

function CustomModal({ children, open, handleOpen, handleClose }) {
  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-container">{children}</div>
      </Modal>
    </div>
  );
}

export default CustomModal;
