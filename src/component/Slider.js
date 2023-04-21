import { Col, Container, Row, Button, Card } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <Container fluid>
      <Row
        className=" d-flex justify-content-between justify-content-center
"
      >
        <Col sm="3" md="3" lg="3" className=" text-center ">
          <h2>Up to 70% off | Clearance store</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="  text-center">
          <h2>Bluetooth Calling Smartwatch starts at</h2>
          <Card style={{ width: "18rem" }} >
            <Card.Img 
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
            />
            <Card.Body>
              <Button variant="">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h2>Automotive essentials | Up to 60% off</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img20/AmazonLaunchpad/2022/DEC_GW/Grocery_PC_CC_379X304._SY304_CB620688365_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h2>Automotive essentials | Up to 60% off</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="3" md="3" lg="3" className="text-center">
          <h2>Diapers & wipes | Starting ₹99</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Baby/cnnjpp1/CC_Rev1x._SY304_CB594433898_.jpg "
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h2>Bestselling Smartwatch starts at ₹1,999</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wearables/PC_CategoryCard_379X304_2._SY304_CB614835787_.jpg"
            />
            <Card.Body>
              <Button variant="">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h2>Gardening days | Starting ₹99</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/IMG20/Home/2021/GW/MSO/pc-cc_-379x304_new._SY304_CB614591838_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="3" md="3" lg="3" className="text-center">
          <h2>Value Packs under ₹599 | Amazon Brands & more</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg"
            />
            <Card.Body>
              <Button variant="">see more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Slider;
