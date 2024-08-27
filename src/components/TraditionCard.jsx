import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalComponent from './Modal';

import { useNavigate } from 'react-router-dom';

function CustomCard({ title, text, imageSrc, modalTitle, modalText, country, images }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const useModal = false

  const linkToInfo = () => {
    if (useModal) return setShow(true)

    navigate(`/info-page`, { 
      state: { 
        country: country, 
        tittle: modalTitle, 
        para: modalText,
        images: images
      } 
    })

    
  }

  return (
    <>
   
      <Card className="h-100 " border="white" style={{ background: "transparent", border: "1.5px solid white" }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title style={{fontSize: 30}}>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <div className="d-grid gap-2">
            <Button onClick={linkToInfo} variant="light" size="lg">Info</Button>
          </div>
        </Card.Body>
      </Card>
      <ModalComponent
        show={show}
        handleClose={() => { setShow(false) }}
        title={modalTitle}
        text={modalText}
      />
     
    </>
    
  );
}

export default CustomCard;
