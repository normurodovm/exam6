import React from "react";
import homeimg1 from './img/home-img1.png';
import homeimg2 from './img/home-img2.png';
import { HomeAbout } from "./components/home-about";
import { HomeData } from "./data/home-data";
import { HomeAboutIcon } from "./components/home-about-icon1";
import { HomeProduct } from "../../components/products/products";
import { Feedback } from "./components/feedback";
import { SimpleSlider } from "../slider/slider";
import { Offer } from "../../components/offer/offer";
import { Footer } from "../../components/footer/footer";
import { Food } from "../../components/foods/food";
import { Store } from "./components/store/store";
import { SubscribeForm } from "../../components/form/form";
export const Home = () => {
  return (
    <><div>

    </div>
      <div className="bg-topbg bg-cover bg-center pb-[247px] pt-[47px]">
        <div className="container">
        <div>
          {HomeData.map((item) => (
            <div key={item.id}>
              <div className="max-w-[640px] pt-[207px] pl-[260px]">
                <h1 className="font-[yellowtail] text-[36px] text-[#68a47f]">
                  {item.title}
                </h1>
                <p className="font-extrabold text-5xl mt-2 mb-[23px] text-[#274c5b]">
                  {item.description}
                </p>
                <button className="flex gap-2 items-center pt-[14px] pb-[18px] pl-[19px] pr-[19px] bg-yellow-300 rounded-[16px] text-[20px] text-[#274c5b]">
                  Explore Now
                  <HomeAboutIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="container">
        <div className="flex gap-[36px] justify-center mt-[180px] mb-[180px]">
          <img className="w-[682px]" src={homeimg1} alt="img" />
          <img className="w-[682px]" src={homeimg2} alt="img" />
        </div>
      </div>
      <HomeAbout />
      <section className="mb-[200px]">
        <HomeProduct />
      </section>
      <section>
            {/* <Feedback/> */}
      </section>
      <section className=" bg-farming bg-cover bg-center">
          <SimpleSlider/>
      </section>
      <section className="bg-[#274C5B] mt-[25px] pt-[250px] pb-[250px]">
            <Offer/>
      </section>
      <section>
            <Store/>
      </section>
      <section className="pt-[187px] pb-[187px]">
        <Food/>
      </section>
      <section>
        <SubscribeForm/>
      </section>
      <section className="pt-[117px]">
      <Footer/>
      </section>
    </>
  );
};

