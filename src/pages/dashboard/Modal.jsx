import "./modal.scss";

const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <p>Do you want to delete this Course ?</p>
          <button className="modal-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-actions">
          <button className="modal-btn" onClick={onConfirm}>
            Yes
          </button>
          <button className="modal-btn" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
