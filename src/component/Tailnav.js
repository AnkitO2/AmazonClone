import "./Tailnav.css";
import { Menu } from "react-feather";
import { Col, Container, Row } from "react-bootstrap";
import Logonav from "../Logos/snavimg.jpg";
import { Fragment } from "react";

const Tailnav = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row className="Nav-Background-color">
          <Col
            md={9}
            className="second-nav-halfcol d-flex justify-content-between align-items-center"
          >
            <Menu id="Menu" />
            <p>All</p>
            <p>Amazon Minitv</p>
            <p>Sell</p>
            <p>Best Sellers</p>
            <p>Mobiles</p>
            <p>Todays Deal</p>
            <p>Customer Service</p>
            <p>Electronics</p>
            <p>Prime</p>
            <p>New Realeases</p>
          </Col>
          <Col md={3}>
            <div className="d-flex   justify-content-end">
              <img src={Logonav} alt="Error"  />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Tailnav;
