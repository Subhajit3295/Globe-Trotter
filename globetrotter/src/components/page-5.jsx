import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Comments } from "./comments";
export const PageFive = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <>
      {/* Navigation Buttons */}
      <div className="heading-two d-flex justify-content-between align-items-center flex-lg-row flex-column flex-md-row">
        <p className="h2 display-5 fw-bold">See why Tourists Choose Us!</p>
        <div className="d-flex gap-3 h-75">
          <button
            ref={prevButtonRef}
            title="Previous"
            style={{
              zIndex: 10,
              background: "#0090a0",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            <i class="bx bxs-chevron-left fs-4"></i>
          </button>
          <button
            ref={nextButtonRef}
            title="Next"
            style={{
              zIndex: 10,
              background: "#0090a0",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            <i class="bx bxs-chevron-right fs-4"></i>
          </button>
        </div>
      </div>

      <div className="page-five d-flex gap-lg-3 h-100">
        <div className="page-five-child h-auto w-100">
          <img
            src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/_498616_heroimage.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className="outer">
          <div className="page-five-child d-flex flex-column h-100 w-100 gap-lg-5 gap-md-4 gap-4 p-2">
            <Swiper
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              modules={[Navigation]}
              className="mySwiper w-100"
              slidesPerView={1}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide className="swiper-slider h-100 w-100 d-flex flex-column">
                <Comments
                  name="Priya Paswan"
                  comment="I had an amazing experience with this travel website! The
                    site is easy to use, the prices are great, and the customer
                    service is top-notch. I would definitely use it again for my
                    next trip!"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slider h-100 w-100 d-flex flex-column">
                <Comments
                  name="Subhajit Mondal"
                  comment="Globe Trotter exceeded my expectations. Their travel itineraries are
    well-researched, and the deals are unbeatable. I’ve already recommended it
    to my friends and family."
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slider h-100 w-100 d-flex flex-column">
                <Comments
                  name="Emily Carter"
                  comment="Globe Trotter made planning my dream vacation a breeze! Their
                recommendations were spot-on, and the customer service team was super
                 helpful. I can’t wait to book my next trip with them!"
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slider h-100 w-100 d-flex flex-column">
                <Comments
                  name="Rajesh Verma"
                  comment="Amazing experience! I found affordable packages and got real-time updates
                   about my bookings. Globe Trotter is my go-to travel platform now. Highly
                 recommended!"
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slider h-100 w-100 d-flex flex-column">
                <Comments
                  name="Sarah Thompson"
                  comment="I loved how easy it was to navigate the site. From finding destinations to
    booking hotels and flights, everything was seamless. Thank you, Globe
    Trotter, for making travel stress-free!"
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slider h-100 w-100 d-flex flex-column">
                <Comments
                  name="Michael Brown"
                  comment="The guided tour package I booked through Globe Trotter was fantastic.
    Everything was well-organized, and I got to explore places I never thought
    I would visit. Five stars from me!"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
