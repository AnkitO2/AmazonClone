import React from "react";
import'./Scrollslidefirst.css';
import { ChevronLeft, ChevronRight } from "react-feather";

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
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <ChevronLeft className="icon" />
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <ChevronRight className="icon" />
      </button>
      <div className="product-container">
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41lshLcdFxL._AC_SY200_.jpg"
          cardno="1"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31svuNKVYzL._AC_SY200_.jpg"
          cardno="2"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51DLLa8HNWL._AC_SY200_.jpg"
          cardno="3"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/316ArzLeJ2L._AC_SY200_.jpg"
          cardno="4"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31cQxf0GUeL._AC_SY200_.jpg"
          cardno="5"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51HVV8NS2ML._AC_SY200_.jpg"
          cardno="6"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61QQtY6qtHL._AC_SY200_.jpg"
          cardno="7"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41EHX6AnHWL._AC_SY200_.jpg"
          cardno="8"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41CCVCpm91L._AC_SY200_.jpg"
          cardno="9"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31AUuzf5cDL._AC_SY200_.jpg"
          cardno="10"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41yx-OTfNwL._AC_SY200_.jpg"
          cardno="11"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31flGUWUY9L._AC_SY200_.jpg"
          cardno="12"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41uS7ARDBlL._AC_SY200_.jpg"
          cardno="13"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81TBkVDGeGL._AC_SY200_.jpg"
          cardno="14"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41CkKbseMGL._AC_SY200_.jpg"
          cardno="15"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31XhRxMvTOL._AC_SY200_.jpg"
          cardno="16"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31qrsfYb7+L._AC_SY200_.jpg"
          cardno="17"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31aamXCkilL._AC_SY200_.jpg"
          cardno="18"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41sGgPsu2lL._AC_SY200_.jpg"
          cardno="19"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51eJq2jkOxL._AC_SY200_.jpg"
          cardno="20"
          alt="Error"
        />
      </div>
    </div>
  );
};
export default Scrollfirst;
