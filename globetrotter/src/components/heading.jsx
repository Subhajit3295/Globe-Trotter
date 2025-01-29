import React, { useRef } from "react";

export const HeadingTwo = (props) => {
  return (
    <div className="heading-two" id="heading-two">
      <p className="h2 display-5 fw-bold">{props.heading}</p>
      <p className="subheading-two">{props.subheading}</p>
    </div>
  );
};

export const HeadingThree = (props) => {
  return (
    <div className="heading-two">
      <p className="subheading-three fw-bold">{props.subheading}</p>
      <p className="h2 display-5 fw-bold">{props.heading}</p>
    </div>
  );
};

export const HeadingFour = (props) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <div className="heading-two heading-four">
      <p className="h2 display-5 fw-bold">{props.heading}</p>
      <div className="d-flex gap-3 h-75">
        <button ref={prevButtonRef} className="btn btn-outline-dark">
          <i class="bx bxs-chevron-left fs-4"></i>
        </button>
        <button ref={nextButtonRef} className="btn btn-outline-dark">
          <i class="bx bxs-chevron-right fs-4"></i>
        </button>
      </div>
    </div>
  );
};
