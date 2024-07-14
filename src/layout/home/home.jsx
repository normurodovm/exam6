import React from "react";
// import homeimg from './img/home-bg-img.png'
import homeimg1 from './img/home-img1.png'
import homeimg2 from './img/home-img2.png'
import { HomeAbout } from "./components/home-about";
import { HomeData } from "./data/home-data";
import { HomeAboutIcon } from "./components/home-about-icon1";
export const Home = () => {
    return <>
    <div className="home__top_block homeblock bg-cover bg-center h-screen">
        <div>
            {HomeData.map((item) => (
                <div className="max-w-[640px] pt-[207px] pl-[260px]">
                    <h1 className="font-[yellowtail] text-[36px] text-[#68a47f]">{item.title}</h1>
                    <p className="font-extrabold text-5xl mt-2  mb-[23px] text-[#274c5b]">{item.description}</p>
                    <button className="flex gap-2 items-center pt-[14px] pb-[18px] pl-[19px] pr-[19px] bg-yellow-300 rounded-[16px] text-[20px] text-[#274c5b]">
        Explore Now
        <HomeAboutIcon/>
      </button>

                </div>
            ))}
        </div>
    </div>
    <div className="container">
        <div className="flex gap-[36px] justify-center mt-[180px] mb-[180px]">
            <img className="w-[682px]" src={homeimg1} alt="img" />
            <img className="w-[682px]" src={homeimg2} alt="img" />
        </div>
    </div>
        <HomeAbout/>
    </>
}