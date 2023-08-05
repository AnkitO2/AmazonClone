import React from "react";
import "./Scrollslidesecond.css";
import { ChevronLeft, ChevronRight } from "react-feather";

const Scrollslidesecond = () => {

  let box = document.querySelector(".producte-container");
  const btnpresspreve = () => {
    let Slider = box.clientWidth;
    box.scrollLeft = box.scrollLeft - Slider;
  };
  const btnpressnexte = () => {
    let Slider = box.clientWidth; 
    box.scrollLeft = box.scrollLeft + Slider;
  };
  return (
    <div className="producte-carousel">
      <button className="prebtn" onClick={btnpresspreve}>
        <ChevronLeft className="icone" />
      </button>
      <button className="nextbtn" onClick={btnpressnexte}>
        <ChevronRight className="icone" />
      </button>
      <div className="producte-container">
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81lk7-7LejL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71VgHp7sgEL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51UJBnfcWDL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91-T56QlYRL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71RN2I02mnS._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61GbW1W3qRL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81W+9zsvSpL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71IN+z1WhyL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61ARV5uzWPL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71D0-rvuNNL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71pRRnoYK5L._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71RZGpkAodL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71xcGKPaiyL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61vSTz8ouTL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61hAlzQYMsL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/610aSgQvTvL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81Qtsas0iqL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51XYypoxnmL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61sFTrB7LcL._AC_SY200_.jpg"
          alt="Error"
        />
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71357lkGCsL._AC_SY200_.jpg"
          alt="Error"
        />
      </div>
    </div>
  );
};
export default Scrollslidesecond;
