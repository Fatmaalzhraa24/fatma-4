import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ title, text, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {/* Close */}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;