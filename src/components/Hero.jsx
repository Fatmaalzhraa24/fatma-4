import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import AutomaticCarousel from './Carousel';

import { useEffect } from 'react';

import '../css/text-effect.css';

function Hero({ countriesRef }) {

  useEffect(() => {
    const element = document.getElementById("text-e");
    const rect = element.getClientRects();

    let scrollBy = 0;
    let delta = 1;
    let maxScroll = 150;

    function animateScroll() {
      scrollBy += delta;
      element.scrollLeft = scrollBy;
      if (scrollBy >= maxScroll || scrollBy <= 0) {
        delta = -delta;
      }
      requestAnimationFrame(animateScroll);
    }
    animateScroll();

  }, [])

  const seeMoreAction = () => {
    if(countriesRef.current){
      const rect = countriesRef.current.getBoundingClientRect();
      const top = rect.top + window.pageYOffset;

      window.scrollTo({
        top: top,
        behavior: "smooth"
      })
    }
  }

  return (
    <Container className="p-3">
      <Row className="align-items-center text-white my-5">
        <Col lg="5" className="my-3">
          <h1 className="display-3">Heritage Hub</h1>
          <h2> <span className="fw-bold">LETS SEE THE WORLD CULTURES!</span></h2>
          <div className="text-e" id='text-e'>
            {[" 🇮🇶 ", " 🇾🇪 ", " 🇱🇾 ", " 🇰🇼 ", " 🇲🇷 ", " 🇯🇴 ", " 🇮🇶 ", " 🇾🇪 ", " 🇱🇾 ", " 🇰🇼 ", " 🇲🇷 ", " 🇯🇴 ", " 🇮🇶 ", " 🇾🇪 ", " 🇱🇾 ", " 🇰🇼 ", " 🇲🇷 ", " 🇯🇴 ", " 🇮🇶 " , " 🇱🇾 ", " 🇰🇼 ", " 🇲🇷 ", " 🇯🇴 "].map((elemnt, index) => {
              return <p key={index}>{elemnt}</p>
            })}
          </div>
          <Button  variant="light" size="lg" className="w-75 mt-3" style={{ borderRadius: "6px" }} onClick={(e) => seeMoreAction()}>See More</Button>
        </Col>
        <Col lg="7" className="my-3">
          {/* <Row>
            <Col xs="7" className="h-100">
              <img src="/img/hero/1.png" width="100%" style={{ height: "100%" }} />
            </Col>
            <Col xs="5">
              <Row className="h-100">
                <Col xs="12" className="p-0">
                  <img src="/img/hero/2.png" width="100%" />
                </Col>
                <Col xs="12" className="p-0" style={{ position: "relative" }}>
                  <img src="/img/hero/3.png" width="100%" style={{ position: "absolute", bottom: "0px" }} />
                </Col>
              </Row>
            </Col>
          </Row> */}
          <AutomaticCarousel
            images={[
              {
                original: "/img/hero/5.png",
              },
              {
                original: "/img/hero/2.png",
              }
            ]
            }
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;