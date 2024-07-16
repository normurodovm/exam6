import React from "react";
import { HomeAboutData } from "../data/home-about-data";
import { HomeAboutIcon } from "./home-about-icon1";
import { useNavigate } from "react-router-dom";

export const HomeAbout = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/shop'); 
  };


  return (
    <>
      <div className="bg-homeaboutbg bg-cover bg-center">
        {HomeAboutData.map((item) => (
          <div key={item.id} className="container flex justify-end ">
            <div className=" text-start max-w-[702px] pt-[86px] pb-[186px]">
              <h1 className="font-normal text-3xl text-[#7eb693] font-[yellowtail]">
                {item.title}
              </h1>
              <h2 className="font-extrabold text-[50px] text-[#274c5b] mt-[8px] mb-14px">
                {item.description}
              </h2>
              <p className="font-normal text-base text-[#525c60] leading-[1.65] mb-[36px] max-w-[690px]">
                {item.text}
              </p>
              <div className="Home__about_block pl-[120px] relative mb-[33px]">
                <h2 className="font-extrabold text-[25px] text-[#274c5b] mb-[7px]">{item.smalltitle1}</h2>
                <p className="font-normal text-[18px] leading-[1.65] text-[#525c60] max-w-[444px]">{item.smalltext1}</p>
              </div>
              <div className="Home__about_block2 pl-[120px] relative mb-[33px]">
                <h2 className="font-extrabold text-[25px] text-[#274c5b] mb-[7px]">{item.smalltitle2}</h2>
                <p className="font-normal text-[18px] leading-[1.65] text-[#525c60] max-w-[444px]">{item.smalltext2}</p>
              </div>
              <button onClick={handleShopNowClick} className="flex items-center px-6 py-3 text-white bg-[#274c5b] rounded-lg mt-[46px]">
                Shop Now
                <HomeAboutIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};