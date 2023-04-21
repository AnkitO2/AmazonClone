import { Container ,Row,Col} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Picslider() {
  return (
    <Container fluid>
        <Row>
            <Col sm={12} md={12} lg={12} >
    <Carousel>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61v07Nz4M7L._SX3000_.jpg"
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
          src=" https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/B1p1-8Bws7L._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61s5QLgMYGL._SX3000_.jpg"
          alt="Forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71rHB2HOnjL._SX3000_.jpg "
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=" https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61l4i7aoY2L._SX3000_.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=" https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51ovs76vmtL._SX3000_.jpg"
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
