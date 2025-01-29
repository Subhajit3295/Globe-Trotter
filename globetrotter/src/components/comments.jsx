import React from "react";

export const Comments = (props) => {
  return (
    <>
      <div className="h-75">
        <div className="quote-left-container">
          <i class="bx bxs-quote bxs-quote-alt-left"></i>
        </div>

        <p className="px-lg-5 px-md-5 px-2 fs-5">
          {props.comment}
        </p>

        <div className="quote-left-container w-100 d-flex justify-content-end">
          <i class="bx bxs-quote bxs-quote-alt-right"></i>
        </div>
      </div>
      <div className="comment-container h-50 d-flex justify-content-center flex-column align-items-center pt-0 p-1 p-lg-5 p-md-5">
        <div className="d-flex w-100 align-items-center justify-content-start gap-3 px-1 px-lg-5">
          <div className="hiphen"></div>
          <span className="h-auto fs-1">{props.name}</span>
        </div>
      </div>
    </>
  );
};
