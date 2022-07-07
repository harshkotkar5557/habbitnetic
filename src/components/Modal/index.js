import React from "react";

const Modal = ({ title, open, close, children }) => {
  return open ? (
    <div className="modal" onClick={() => close()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <i
            class="fa fa-times-circle p-1 cursor-pointer"
            aria-hidden="true"
            onClick={() => close()}
          ></i>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  ) : null;
};


export default Modal;
