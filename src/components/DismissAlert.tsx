interface DismissAlertProps {
  onClose: () => void;
}

function DismissAlert({ onClose }: DismissAlertProps) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Hello!!</strong> This is a dissmis Alert
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default DismissAlert;
