import React from "react";
import { Fragment } from "react";
import "./Tempnav.css";

import Amlogo from "../Logos/amlogo.png";
import amlog from "../Logos/image11.png";
import { MapPin, Search, ShoppingCart } from "react-feather";

import { Row, Col, Container } from "react-bootstrap";

const Tempnav = () => {
  return (
    <>
      <Container fluid>
        <Row className="bg-dark text-white m-0 p-0">
          <Col
            xs={12}
            sm={6}
            md={2}
            className="  d-flex justify-content-center "
          >
            <div className=" d-flex justify-content-center">
              <img
                src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
                width={100}
                className=""
              />
            </div>
            <div className="d-flex align-items-center ">
              <p className="hello fw-bold">Hello</p>

              <MapPin className="fw-bold" />
              <p className="fw-bold">select your address</p>
            </div>
          </Col>
          <Col xs={12} sm={4} md={7} className="">
            <div className="d-flex align-items-center  ">
              <select className="w-5 p-3">
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
                className="w-100 p-3"
              />
              <div className="p-3">
                <Search className="" />
              </div>
            </div>
          </Col>
          <Col
            sm={4}
            md={3}
            className=" d-flex justify-content-center  justify-content-between"
          >
            <div
              className="d-flex align-items-center  
        "
            >
              <img
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31irCYL0cIL._SX355_.jpg"
                alt="Error"
                width={30}
                height={15}
              />
              <p className="text-center">EN</p>
            </div>
            <div>
              <p>Hello,sign in</p>
              <h5 className="m-0">Accounts & List</h5>
            </div>
            <div>
              <p>return</p>
              <h5>& Order</h5>
            </div>
            <div className="">
              <ShoppingCart /> Cart
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Tempnav;
