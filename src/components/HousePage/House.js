import React, { useEffect, useRef } from "react";

export default function House() {
  const currentSlide = useRef(0);
  const sliderRef = useRef();

  let slides; 
  //on init and on handleSliderNav() position slides based on the new currentSlide
  const positionSlides = () => {
    //access slides on DOM
    slides = document.querySelectorAll(".slide");
    //each slide is fully translatedX based on the index of the currentSlide
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${
        100 * (i - currentSlide.current)
      }%)`;
    });
    console.log(slides);
  };

  //add offset to the currentSlide.current
  const handleSliderNav = (e) => {
    // console.log(e);
    //determine the offset and set new currentSlide
    const offset = e.target.dataset.direction === "left" ? -1 : 1;

    //error boundries left and right
    if (offset === 1 && currentSlide.current + 1 === slides.length){
      return
    }
    if (offset === -1 && currentSlide.current === 0){
      return
    }
    currentSlide.current = currentSlide.current + offset;
    //call positionSlides() to reposition
    positionSlides();
  };

  //on load position slides
  useEffect(() => {
    positionSlides();
  }, []);

  return (
    <div className="house">
      <div className="house__info">
        <div className="house__info--header">
          <div className="heading--address">
            <h2 className="header--title heading-primary">House Name</h2>
            <h3 className="heading-secondary">
              1804 Covington Ln, Oahu Hawaii
            </h3>
          </div>
          <div className="heading--price">
            <h2 className="heading-secondary"> $1,000,000</h2>
            <h2 className="text-regular"> $1,400/month</h2>
          </div>
        </div>

        <div className="house__info--content">

          <div className="info__general">
            <div className="info__general--photo">
              <img
                src={require("../../assets/images/poolhouse--1.jpeg")}
                alt=""
                className="info--photo info--photo--main "
              />
              <img
                src={require("../../assets/images/poolhouse--2.jpeg")}
                alt=""
                className="info--photo info--photo--extra"
              />
            </div>
            <div className="info__general--overview overview">
              <h2 className="overview--title heading-secondary">
                Property Overview
              </h2>
              <div className="overview--container">
                <div>
                  <span className="overview--item text-regular">
                    <i className="fa-solid fa-bed"></i>5 Bedrooms
                  </span>
                  <span className="overview--item text-regular">
                    <i className="fa fa-square-parking"></i>4 Car Parking
                  </span>
                  <span className="overview--item text-regular">
                    <i className="fa-solid fa-temperature-arrow-up"></i>
                    Central Air
                  </span>
                  <span className="overview--item text-regular">
                    <i className="fa-regular fa-snowflake"></i>
                    Central Heat
                  </span>
                  <span className="overview--item text-regular">
                    <i className="fa-solid fa-calendar-days"></i>
                    Built in 2010
                  </span>
                </div>
                <div>
                  <span className="overview--item text-regular">
                    <i className="fa-solid fa-dog"></i>
                    Pets: Allowed
                  </span>
                  <span className="overview--item text-regular">
                    <i className="fa-solid fa-house"></i>
                    Lot Size: 1.5 acres
                  </span>
                  <span className="overview--item text-regular">
                    <i className="fa-solid fa-toilet"></i>
                    Applicances: Oven, Dishwasher, Washer/Dryer, Refrigerator,
                  </span>
                  <span className="overview--item text-regular">
                    <i className="fa-solid fa-fire-flame-simple"></i>
                    Utilities: Electricity, Natural Gas
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="house__photos">
        <div ref={sliderRef} className="house__photos--slider">
          <img
            data-slide={0}
            className="house__photos--slider-img slide"
            src={require("../../assets/images/poolhome-1.jpg")}
            alt="home"
          />
          <img
            data-slide={1}
            className="house__photos--slider-img slide"
            src={require("../../assets/images/poolhome-2.jpg")}
            alt="home"
          />
          <img
            data-slide={2}
            className="house__photos--slider-img slide"
            src={require("../../assets/images/poolhome-3.jpg")}
            alt="home"
          />
          <button
            data-direction="left"
            onClick={(e) => handleSliderNav(e)}
            className="nav__btn nav__btn--left"
          >
            &larr;
          </button>
          <button
            data-direction="right"
            onClick={(e) => handleSliderNav(e)}
            className="nav__btn nav__btn--right"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
