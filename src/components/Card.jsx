import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../css/CountryButton.css';

function CustomCard({ title, text, imageSrc, country }) {
  return (
    <Card className="country-button h-100" border="white" style={{ background: "transparent" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div className="d-grid gap-2">
          <Button href={`/traditions/${country}`} variant="light" size="lg">Click here</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;