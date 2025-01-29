import React from "react";

export const PageSeven = () => {
  return (
    <div className="page-seven d-flex">
      <div className="page-seven-item border border black position-relative d-flex justify-content-center">
        <div className="left-circle z-0 position-absolute"></div>
        <div className="right-circle z-0 position-absolute"></div>
        <div className="page-seven-content h-100 position-relative z-3 d-flex flex-column align-align-items-center justify-content-evenly">
          <p className="display-4 fw-bold">
            Prepare yourself and let's explore the beauty of the world
          </p>
          <p className="subheading fs-5">
            We have lots of exclsive deals for you
          </p>
          <div className="get-started-btn-container w-100 d-flex justify-content-center">
            
            <button className="get-started-yellow-btn">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
