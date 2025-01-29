import React from "react";
import { HeadingTwo } from "./heading";
import { Ability } from "./ability";

export const PageFour = () => {
  return (
    <div className="page-four my-5">
      <div className="page-four-items position-relative page-four-items-1 py-2">
        <div className="page-four-img-container">
          <img
            src="https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?cs=srgb&dl=pexels-andyhvu-3217911.jpg&fm=jpg"
            alt=""
            className="page-four-img"
          />
        </div>
        <div className="page-four-img-container-2">
          <img
            src="https://wallpaper.forfun.com/fetch/00/0043a0b0e55215af9fd47074c5cf9497.jpeg"
            alt=""
            className="page-four-img"
          />
        </div>
      </div>
      <div className="page-four-items">
        <HeadingTwo heading="We'll make sure you have a fantastic vacation." />
        <p className="lead heading-two">
          We know that every traveler is unique, which is why we offer a range
          of options to fit your specific needs. Whether you're looking for
          luxury or budget-friendly, we've got you covered. Our team of travel
          experts is always on hand to provide personalized recommendations and
          advice, so you can make the most of your trip.
        </p>
        <div className="learnmore-container d-flex justify-content-start">
          <button className="getstartedbtn">Learn more</button>
        </div>
        <Ability
          count_1="300"
          count_2="500"
          count_3="10"
          description_1="Travelers and Partners"
          description_2="Places and Destinations"
          description_3="Years of experience"
        />
      </div>
    </div>
  );
};
