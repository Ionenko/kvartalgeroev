import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss'

const ESC_KEY = 27;

const Modal = (props) => {

    const {
        handleClose,
        isOpen,
    } = props;


    const handleKeyDown = event => {
        if (event.keyCode === ESC_KEY) {
            event.stopPropagation();
        }
    };

    // const handleOverlayOnClick = event => {
    //     // if (shouldClose === null) {
    //     //     setShouldClose(true);
    //     // }
    //
    // };

    // const handleOverlayOnMouseDown = event => {
    //     if (event.target == this.overlay) {
    //         event.preventDefault();
    //     }
    // };

    return isOpen ? ReactDOM.createPortal(
        <Fragment>
            <div className="modal-overlay"
                 onClick={handleClose}
                 onKeyDown={handleKeyDown}
            />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal"
                     onClick={handleClose}
                     onKeyDown={handleKeyDown}
                >
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" aria-label="Close" data-dismiss="modal"
                                onClick={handleClose}>
                            <span aria-hidden> &times; </span>
                        </button>
                    </div>

                    {props.children}

                    <p>
                        Hello, I am modal
                    </p>
                </div>
            </div>
        </Fragment>, document.body
    ) : null;
};

export default Modal;