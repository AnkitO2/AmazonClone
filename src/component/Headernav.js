import "./Headernav.css";
import { MapPin, Search, ShoppingCart } from "react-feather";
import { Col, Container, Row } from "react-bootstrap";

const Headernav = () => {
  return (
    <Container fluid>
      <Row className="Upernavbackground">
        <Col
          sm="4" 
          md="6"
          lg={12}
          className="  d-flex flex-row justify-content-around p-3 align-items-center flex-nowrap "
        >
          <div className="Amazon-logo-container border-white">
            <div className="logo"></div>
            <span className="dotin">.in</span>
          </div>
          <div className="address-container border-white">
            <p className="hello">Hello</p>
            <div className="icon-address">
              <MapPin />
              <p>select your address</p>
            </div>
          </div>
          <div className="search-container">
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
          <div className=" languge-image p-2 border-white d-flex align-items-center align-items-center">
            <img
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31irCYL0cIL._SX355_.jpg"
              alt="Error"
            />
            <p>EN</p>
          </div>
          <div className="login-container border-white">
            <p>
              Hello,<span>Sign in</span>
            </p>
            <p className="accounts">Accounts & List</p>
          </div>
          <div className="return-order-container border-white">
            <p>
              Return<div className="order">& Order</div>
            </p>
          </div>
          <div className="Cart-container border-white">
            <ShoppingCart /> Cart
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Headernav;
