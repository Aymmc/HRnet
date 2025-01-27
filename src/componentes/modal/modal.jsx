import Modal from '@aymmc/react-modal-library';  // Assurez-vous que l'import est correct
import React, { useState } from 'react';

const AppModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h1>Hello Modal</h1>
        </Modal>
      </div>
    );
};

export default AppModal;
