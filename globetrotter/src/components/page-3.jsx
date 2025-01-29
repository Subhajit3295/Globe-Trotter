import React from "react";

export const PageThree = () => {
  return (
    <div className="page-three">
      <div className="page-three-container">
        <div className="page-three-child">
          <div className="advantage-num num-1">01</div>
          <p className="advantage-heading fw-bold">Best deals and Discount</p>
          <p className="advantage-subheading">
            We are committed to finding the best deals and discounts for our
            customers. We work with top travel providers to offer you exclusive
            discounts, so you can stretch your budget further and make the most
            of your vacation.
          </p>
        </div>
        <div className="page-three-child">
          <div className="advantage-num num-2">02</div>
          <p className="advantage-heading fw-bold">Reliable and Safe Travel</p>
          <p className="advantage-subheading">
            We understand that safety is a top concern when traveling. That's
            why we work with only the most reliable travel providers and tour
            operators, so you can travel with peace of mind knowing that your
            trip is in good hands.
          </p>
        </div>
        <div className="page-three-child">
          <div className="advantage-num num-3">03</div>
          <p className="advantage-heading fw-bold">Hassle-Free Booking</p>
          <p className="advantage-subheading">
            Booking your trip with us is simple and straightforward. We take
            care of all the details, from flight and hotel reservations to
            activities and transportation, so you can focus on what really
            matters - enjoying your vacation.
          </p>
        </div>
        <div className="getstarted-container">
          <button className="getstartedbtn">Get Started</button>
        </div>
      </div>
      <div className="page-three-container d-flex justify-content-center position-relative none">
        <div className="image-1-parent none">
          <img
            src="https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg"
            alt=""
            className="image-1"
          />
        </div>
        <div className="page-three-items-2 position-absolute none">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlnFSuQWXRjLOxDsIq8GyfgXQGvEz6ruPTkxU5d3Fkj2XRcHPOd6FoeF_SGesl3EHyfQ&usqp=CAU"
            alt=""
            className="image-2"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlnFSuQWXRjLOxDsIq8GyfgXQGvEz6ruPTkxU5d3Fkj2XRcHPOd6FoeF_SGesl3EHyfQ&usqp=CAU"
            alt=""
            className="image-2"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlnFSuQWXRjLOxDsIq8GyfgXQGvEz6ruPTkxU5d3Fkj2XRcHPOd6FoeF_SGesl3EHyfQ&usqp=CAU"
            alt=""
            className="image-2"
          />
        </div>
      </div>
    </div>
  );
};
