import React, { useEffect, useRef, useState } from "react";

export default function House() {
  const currentSlide = useRef(0);
  const sliderRef = useRef();
  // const [slides, setSlides] = useState(0);

  const positionSlides = () => {
    const slides = document.querySelectorAll(".slide");
    console.log(slides);

    slides.forEach((slide, i) => {
      // console.log(slide);
      slide.style.transform = `translateX(${100 * (i - currentSlide.current)}%)`;
    });
  };

  const handleSliderNav = (e) => {
    console.log(e);
    //get direction we are moving
    const offset = e.target.dataset.direction === "left" ? -1 : 1;
    //set currentSlide.current to old +/- offset
    currentSlide.current = currentSlide.current + offset;
    //call positionSlides() to reposition translateX/Y
    positionSlides();

    console.log(currentSlide.current);
  };

  useEffect(() => {
    positionSlides();
  }, []);


  return (
    <div className="house">
      <div className="house__info">
        <div className="house__info--header">
          <div>
            <h2 className="header--title heading-primary">House Name</h2>
            <h3 className="header--address heading-secondary">
              1804 Covington Ln, Oahu Hawaii
            </h3>
          </div>
          <div>
            <h2 className="heading-secondary"> $1,000,000</h2>
          </div>
        </div>

        <div className="house__info--content">
          <div className="info__general">
            <div className="info__general--photo">
              <img
                src={require("../../assets/images/poolhouse--1.jpeg")}
                alt=""
                className="info--photo"
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
          <div className="info__description">
            <p className="info__description--paragraph text-regular">
              Located in an Oceanfront Community along the resort coast on the
              Big Island of Hawaii is this stunning luxury residence. This
              residence offers an array of features with a lap pool & elevated
              spa, game room with a pool table and shuffleboard, BBQ and fire
              pits area, wet bar area with spacious indoor & outdoor kitchens
              plus a great room. Each room is gorgeously furnished and reflects
              quality interior design. The home has spectacular panoramic views
              of the ocean, surf, beach, mountain, sunsets, and overlooks the
              protected Anchialine ponds. Located within walking distance to the
              King's and Queen's Market Place, shops & restaurants, Anaeho’omalu
              bay with white sandy beach and snorkeling, and Waikoloa golf
              course nearby.
            </p>
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