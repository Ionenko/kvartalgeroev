import React from 'react';
import Modal from '../Modal';
import useModal from '../../hooks/useModal';

const CallBackModal = () => {

    const {isOpen, handleClose} = useModal();

    return (
        <div>
            <button onClick={handleClose}>Show test modal window</button>
            <Modal isOpen={isOpen} handleClose={handleClose} />
        </div>
    );
};

export default CallBackModal;