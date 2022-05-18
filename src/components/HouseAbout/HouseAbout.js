import React, { useState } from "react";
import { Indicator } from "@mantine/core";
import { Calendar } from "@mantine/dates";

export default function HouseAbout() {
  const [calendarValue, setCalendarValue] = useState(null);

  const handleCalendarChange = (e) => {
    //handle time select popup
    //save time and date as data (to be confirmed in email? or somehting)
  }

  const BookingCalendar = () => {
    return (
      <Calendar
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
      <div className="info__description">
        <p className="info__description--paragraph text-regular">
          Located in an Oceanfront Community along the resort coast on the Big
          Island of Hawaii is this stunning luxury residence. This residence
          offers an array of features with a lap pool & elevated spa, game room
          with a pool table and shuffleboard, BBQ and fire pits area, wet bar
          area with spacious indoor & outdoor kitchens plus a great room. Each
          room is gorgeously furnished and reflects quality interior design. The
          home has spectacular panoramic views of the ocean, surf, beach,
          mountain, sunsets, and overlooks the protected Anchialine ponds.
          Located within walking distance to the King's and Queen's Market
          Place, shops & restaurants, Anaeho’omalu bay with white sandy beach
          and snorkeling, and Waikoloa golf course nearby.
        </p>
      </div>
      <div className="booking">
        <BookingCalendar />
      </div>
    </div>
  );
}
