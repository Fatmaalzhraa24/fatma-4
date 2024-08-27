import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TraditionCard from "./TraditionCard";

function TraditionsCards({ country }) {
  const cards = require(`../data/${country}.json`);

  return (
    <Container style={{ marginTop: "4%" }}>
      <Row>
        <Col lg="12">
          <h2 className="mb-3">Traditional Clothes</h2>
        </Col>
        {cards.firstGroup.map((card, index) => (
          <Col key={index} lg="3" md="6" className="my-2">
            <TraditionCard
              title={card.title}
              text={card.text}
              imageSrc={card.image}
              modalTitle={card.modalTitle}
              modalText={card.modalText}
              country={country}
              images={card.images}
            />
          </Col>
        ))}
        <Col lg="12 mt-4">
          <h2 className="mb-3">Traditional Foods</h2>
        </Col>
        {cards.secondGroup.map((card, index) => (
          <Col key={index} lg="3" md="6" className="my-2">
            <TraditionCard
              title={card.title}
              text={card.text}
              imageSrc={card.image}
              modalTitle={card.modalTitle}
              modalText={card.modalText}
              country={country}
              images={card.images}
            />
          </Col>
        ))}
        {/* <Col lg="12 mt-4">
          <h2 className="mb-3">Historical Places</h2>
        </Col> */}
        {/* {cards.thirdGroup.map((card, index) => (
          <Col key={index} lg="3" md="6" className="my-2">
            <TraditionCard
              title={card.title}
              text={card.text}
              imageSrc={card.image}
              modalTitle={card.modalTitle}
              modalText={card.modalText}
              country={country}
              images={card.images}
            />
          </Col>
        ))}
        <Col lg="12 mt-4">
          <h2 className="mb-3">Pepole from History</h2>
        </Col>
        {cards.fourthGroup.map((card, index) => (
          <Col key={index} lg="3" md="6" className="my-2">
            <TraditionCard
              title={card.title} 
              text={card.text}
              imageSrc={card.image}
              modalTitle={card.modalTitle}
              modalText={card.modalText}
              country={country}
              images={card.images}
            />
          </Col>
        ))} */}
      </Row>
    </Container>
  );
}

export default TraditionsCards;