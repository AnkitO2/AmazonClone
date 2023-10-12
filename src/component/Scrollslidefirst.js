import React from "react";
import "./Scrollslidefirst.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Col } from "react-bootstrap";

const Scrollfirst = () => {
  let box = document.querySelector(".product-container");
  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };
  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <Row className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <ChevronLeft className="icon" />
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <ChevronRight className="icon" />
      </button>
      <Col className="product-container">
        <img
          src="https://m.media-amazon.com/images/I/61I+l9IhJWL._AC_SY200_.jpg"
          cardno="1"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/71nIxdtkM6L._AC_SY200_.jpg"
          cardno="2"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/91L8BCbE9TL._AC_SY200_.jpg"
          cardno="3"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/61mdPtC0iIL._AC_SY200_.jpg"
          cardno="4"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/71FAw5RmomL._AC_SY200_.jpg"
          cardno="5"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/819697MwKmL._AC_SY200_.jpg"
          cardno="6"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/61S56nFoAKL._AC_SY200_.jpg"
          cardno="7"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/619-W3muIWL._AC_SY200_.jpg"
          cardno="8"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/81Co8XebLyL._AC_SY200_.jpg"
          cardno="9"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/81Co8XebLyL._AC_SY200_.jpg"
          cardno="10"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/81-1XtEAH2L._AC_SY200_.jpg"
          cardno="11"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/81a2oGhhmaL._AC_SY200_.jpg"
          cardno="12"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/91X1VtDjKMS._AC_SY200_.jpg"
          cardno="13"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/61HTc+D4B+L._AC_SY200_.jpg"
          cardno="14"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/71VOmyQRn0L._AC_SY200_.jpg"
          cardno="15"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/81XA98SOCNL._AC_SY200_.jpg"
          cardno="16"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/81B552m5HjL._AC_SY200_.jpg"
          cardno="17"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/613+CG1dP1L._AC_SY200_.jpg"
          cardno="18"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"
          cardno="19"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/I/81xiJRmOwUL._AC_SY200_.jpg"
          cardno="20"
          alt="Error"
        />
      </Col>
    </Row>
  );
};
export default Scrollfirst;
