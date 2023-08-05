import "./Headernav.css";
import { MapPin, Search, ShoppingCart } from "react-feather";
import { Col, Container, Row } from "react-bootstrap";

const Headernav = () => {
  return (
    <Container fluid>
      <Row className="Upernavbackground">
        <Col className="  d-flex flex-row justify-content-around p-3 align-items-center flex-nowrap ">
          <div
            className="Amazon-logo-container border-white"
            lg="1"
            md="1"
            sm="1"
          >
            <div className="logo"></div>
            <span className="dotin">.in</span>
          </div>
          <div className="address-container border-white" lg="1" md="1" sm="1">
            <p className="hello">Hello</p>
            <div className="icon-address">
              <MapPin />
              <p>select your address</p>
            </div>
          </div>
          <div className="search-container" lg="6" md="6" sm="6">
            <select className="search-select">
              <option>All</option>
              <option>Alexa Skill</option>
              <option>Amazon Devices</option>
              <option>Amazon Fashion</option>
              <option>Amazon Fresh</option>
              <option>Amazon Pharmacy</option>
              <option>Appliances</option>
              <option>Apps & Games</option>
              <option>Baby</option>
              <option>Beauty</option>
              <option>Books</option>
              <option>Car & Motorbike</option>
              <option>Clothing & Accessories</option>
              <option>Collections</option>
              <option>Computers & Accessories</option>
              <option>Deals</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Garden & Outdoors</option>
              <option>Gift Cards</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="search-input"
            />
            <div className="search-icon">
              <Search />
            </div>
          </div>
          <div
            className=" languge-image p-2 border-white d-flex align-items-center align-items-center"
            lg="1"
            md="1"
            sm="1"
          >
            <img
              src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo="
              alt="Error"
            />
            <p>EN</p>
          </div>
          <div className="login-container border-white" lg="1" md="1" sm="1">
            <p>
              Hello,<span>Sign in</span>
            </p>
            <p className="accounts">Accounts & List</p>
          </div>
          <div
            className="return-order-container border-white"
            lg="1"
            md="1"
            sm="1"
          >
            <p>
              Return<div className="order">& Order</div>
            </p>
          </div>
          <div className="Cart-container border-white" lg="1" md="1" sm="1">
            <ShoppingCart /> Cart
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Headernav;
