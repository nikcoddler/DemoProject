import React from "react";
import './Modal.css';

function Modal({closeModal}) {
    return (
        <div className="modalBg">
            <div className="modalContainer">
                <div className="titleCloseBtn"><button onClick={() => closeModal(false)}>X</button></div>
                
                <div className="title">
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className="body">
                    <h1>The next page is awesome! you should move forward, you will enjoy it</h1>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">cancel</button>
                    <button>continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;