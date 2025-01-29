import React from "react";
import { HeadingThree } from "./heading";
import Worldmap from "../world-map.png";

export const PageSix = () => {
  return (
    <div className="page-six bg-light position-relative d-flex flex-column justify-content-between justify-content-lg-between justify-content-md-start">
      <HeadingThree heading="We have access to top places around the world" />
      <img
        src={Worldmap}
        alt=""
        className="worldmap-img position-absolute bottom-0 z-1"
      />
      <div className="page-six-item z-3 d-flex flex-column">
        <p className="h4">Subscribe to our Newsletter</p>
        <p className="subheading-two">
          Stay in the loop With everything you need to know
        </p>
        <div className="subscribe-input-container h-auto d-flex position-relative">
          <input
            type="email"
            name=""
            placeholder="Enter your email"
            className="subscribe-input px-3 py-3"
          />
          <button className="subscribe-btn fw-bold">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
