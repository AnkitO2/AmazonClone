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
            lg="8"
            md="8"
            sm="8"
            className="second-nav-halfcol d-flex justify-content-between align-items-center"
          >
            <Menu id="Menu" className="justify-content-center" />
            <p>All</p>
            <p>Amazon Minitv</p>
            <p>Sell</p>
            <p>Best Sellers</p>
            <p>Mobiles</p>
            <p>Todays Deal</p>
            <p>Customer Service</p>
            <p>Electronics</p>
            <p>Prime</p>
       
          </Col>
           <Col lg="4" md="6" sm="12">
            <div className="d-flex   justify-content-end justify-content-center">
              <img src={Logonav} alt="Error" />
            </div>
          </Col> 
        </Row>
      </Container>
    </Fragment>
  );
};
export default Tailnav;
