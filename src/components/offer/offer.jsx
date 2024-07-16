import React from "react";
import { useNavigate } from "react-router-dom";
import { OfferData } from "./offer-data";
import { Rating } from "../../assets/img/rating-icon";
import { HomeAboutIcon } from "../../layout/home/components/home-about-icon1";
export const Offer = () => {
    const navigate = useNavigate();
  
    const handleShopNowClick = (item) => {
      navigate('/shop-single', { state: item });
    };
  
    return (
      <>
        <div className="container">
            <div className="mb-[30px]">
                <h2 className="font-[yellowtail] text-[38px] text-[#7eb693]">Offer</h2>
                <div className="flex justify-between">
                    <p className="font-extrabold text-[50px] text-white">We Offer Organic For You</p>
                    <button className="flex items-center text-center gap-2 pt-[10px] pb-[10px] p-[30px] bg-[#efd372] rounded-[16px] ">View All Product
                       <HomeAboutIcon/>
                    </button>
                </div>
            </div>
          <div className="flex">
            <div className="flex  gap-[45px] justify-center ">
              {OfferData.map((item) => (
                <div
                  onClick={() => handleShopNowClick(item)}
                  className="w-[305px] bg-white rounded-[30px] p-[30px] justify-center"
                  key={item.id}

                >
                  {item.vegetable && (
                    <h2 className="bg-[#274c5b] max-w-[96px] pt-[5px] pr-[12px] pb-[6px] pl-[12px] text-white text-center font-[15px] rounded-[8px] h-[31px] ">
                      vegetable
                    </h2>
                  )}
                  {item.fresh && (
                    <h2 className="bg-[#274c5b] max-w-[96px] pt-[5px] pr-[12px] pb-[6px] pl-[12px] text-white text-center font-[15px] rounded-[8px] ">
                      fresh
                    </h2>
                  )}
                  {item.health && (
                    <h2 className="bg-[#274c5b] max-w-[96px] pt-[5px] pr-[12px] pb-[6px] pl-[12px] text-white text-center font-[15px] rounded-[8px] ">
                      Health
                    </h2>
                  )}
                  {item.millets && (
                    <h2 className="bg-[#274c5b] max-w-[96px] pt-[5px] pr-[12px] pb-[6px] pl-[12px] text-white text-center font-[15px] rounded-[8px] ">
                      Millets
                    </h2>
                  )}
                  {item.nuts && (
                    <h2 className="bg-[#274c5b] max-w-[96px] pt-[5px] pr-[12px] pb-[6px] pl-[12px] text-white text-center font-[15px] rounded-[8px] ">
                      Nuts
                    </h2>
                  )}
                  <div className="max-w-[335px] ">
                    <img className="h-[259px] mx-auto" src={item.img} alt="" />
                    <h2 className="font-semibold text-[20px]  text-[#274c5b] text-center">
                      {item.title}
                    </h2>
                    <div className="border border-[#dedddd]"></div>
                    <div className="flex items-center gap-[10px] justify-center">
                      <div className="relative inline-block">
                        <span className="text-gray-400 text-[15px]">
                          {item.discount}
                        </span>
                        <span className="absolute inset-0 border-t-2 border-gray-400 top-1/2 transform -translate-y-1/1"></span>
                      </div>
                      <p className="font-bold text-[18px] text-[#274c5b] mr-[20px]">
                        {item.price}
                      </p>
                      <Rating />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  