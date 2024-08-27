import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "./Card";

let cards = require("../data/countries.json");

function HomeCards({ countriesRef }) {
	return (
		<Container id="countries"  ref={countriesRef}>
			<Row>
				{cards.map((card, index) => (
					<Col lg="4" className="my-2" key={index}>
						<Card
							title={card.title}
							text={card.text}
							imageSrc={card.image}
							country={card.country}
							key={index}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default HomeCards;