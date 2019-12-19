import {useState} from 'react';

const UseModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(!isOpen)
    };

    return {
        isOpen,
        handleClose
    }
};

export default UseModal;