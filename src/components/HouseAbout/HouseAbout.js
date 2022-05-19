import React, { useState } from "react";
import { Indicator } from "@mantine/core";
import { Calendar } from "@mantine/dates";

export default function HouseAbout() {
  const [calendarValue, setCalendarValue] = useState(null);

  const handleCalendarChange = (e) => {
    //handle time select popup
    //save time and date as data (to be confirmed in email? or somehting)
  };

  const BookingCalendar = () => {
    return (
      <Calendar
        className="booking__calendar"
        renderDay={(date) => {
          //indicator on todays date
          const day = date.getDate();
          const today = new Date(Date.now()).getDate();
          return (
            <Indicator size={6} color="red" offset={8} disabled={day !== today}>
              <div>{day}</div>
            </Indicator>
          );
        }}
        value={calendarValue}
        onChange={setCalendarValue}
        onClick={(e) => handleCalendarChange(e)}
        firstDayOfWeek="sunday"
      />
    );
  };

  console.log(calendarValue);
  return (
    <div className="about-section">
      <div className="about__top">
        <div className="description">
          <p className="description--paragraph text-regular">
            Located in an Oceanfront Community along the resort coast on the Big
            Island of Hawaii is this stunning luxury residence. This residence
            offers an array of features with a lap pool & elevated spa, game
            room with a pool table and shuffleboard, BBQ and fire pits area, wet
            bar area with spacious indoor & outdoor kitchens plus a great room.
            Each room is gorgeously furnished and reflects quality interior
            design. The home has spectacular panoramic views of the ocean, surf,
            beach, mountain, sunsets, and overlooks the protected Anchialine
            ponds. Located within walking distance to the King's and Queen's
            Market Place, shops & restaurants, Anaeho’omalu bay with white sandy
            beach and snorkeling, and Waikoloa golf course nearby.
          </p>
        </div>
        <div className="review">
          <div className="review__card">
            <span className="review__card--top text-regular">
             <p className="review--text">This is my review. The house was just ok,maybe Ill be back?</p> 
            </span>
            <div className="review__card--bottom">
              <div className="img--container">
                <img
                  src={require("../../assets/images/poolhouse--1.jpeg")}
                  alt="person"
                  className="review__card--img"
                />
              </div>
              <div className="card--namedate">
                <p className="card--name">Nick Smith</p>
                <p className="card--date text-soft">Feb 5, 2001</p>
              </div>
              <div className="card--rating">9.2</div>
            </div>
          </div>
          <div className="review__card">
            <span className="review__card--top text-regular">
             <p className="review--text">This is my review. The house was just ok,maybe Ill be back?</p> 
            </span>
            <div className="review__card--bottom">
              <div className="img--container">
                <img
                  src={require("../../assets/images/poolhouse--1.jpeg")}
                  alt="person"
                  className="review__card--img"
                />
              </div>
              <div className="card--namedate">
                <p className="card--name">Nick Smith</p>
                <p className="card--date text-soft">Feb 5, 2001</p>
              </div>
              <div className="card--rating">9.2</div>
            </div>
          </div>
          <div className="review__card">
            <span className="review__card--top text-regular">
             <p className="review--text">This is my review. The house was just ok,maybe Ill be back?</p> 
            </span>
            <div className="review__card--bottom">
              <div className="img--container">
                <img
                  src={require("../../assets/images/poolhouse--1.jpeg")}
                  alt="person"
                  className="review__card--img"
                />
              </div>
              <div className="card--namedate">
                <p className="card--name">Nick Smith</p>
                <p className="card--date text-soft">Feb 5, 2001</p>
              </div>
              <div className="card--rating">9.2</div>
            </div>
          </div>
          <div className="review__card">
            <span className="review__card--top text-regular">
             <p className="review--text">This is my review. The house was just ok,maybe Ill be back?</p> 
            </span>
            <div className="review__card--bottom">
              <div className="img--container">
                <img
                  src={require("../../assets/images/poolhouse--1.jpeg")}
                  alt="person"
                  className="review__card--img"
                />
              </div>
              <div className="card--namedate">
                <p className="card--name">Nick Smith</p>
                <p className="card--date text-soft">Feb 5, 2001</p>
              </div>
              <div className="card--rating">9.2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__bottom">
        <div className="booking">
          <div className="booking__cta">Book Now:</div>
          <BookingCalendar />
        </div>
      </div>
    </div>
  );
}
