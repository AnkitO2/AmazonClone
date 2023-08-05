import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Picslider() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="   https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61PhyFJspPL._SX3000_.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=" https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                alt="Forth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg "
                alt="Fifth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=" https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
                alt="Sixth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
                alt="Seventh slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Picslider;
