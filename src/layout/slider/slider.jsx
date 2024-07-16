import React from "react";
import Slider from "react-slick";
import { SampleNextArrow } from "./sample-next-arrow";
import { SamplePrevArrow } from "./sample-prev-arrow";
import { Feedback } from "../home/components/feedback";
export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000
        
      };
      return (
        <div className="slider-container container">
          <Slider {...settings}>
            <div>
              <Feedback/>
            </div>
            <div>
              <Feedback/>
            </div>
            <div>
              <Feedback/>
            </div>
            <div>
              <Feedback/>
            </div>
            <div>
              <Feedback/>
            </div>
            <div>
              <Feedback/>
            </div>
          </Slider>
        </div>
      );
    }