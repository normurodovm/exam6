import React from "react";
import { ProductData } from "./products-data";
import { Rating } from "../../assets/img/rating-icon";
import { useNavigate } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import { ShopSingle } from "../../layout/shop-single/shop-single";
export const HomeProduct = () => {
  const navigate = useNavigate();

  const handleShopNowClick = (item) => {
    navigate('/shop-single', { state: item });
  };

  return (
    <>
      <div className="container">
        <div className="text-center mt-[150px] mb-[40px]">
          <h2 className="font-[yellowtail] text-3xl text-[#7eb693] font-[yellowtail">
            Categories{" "}
          </h2>
          <h2 className="font-extrabold text-[50px] text-[#274c5b] mt-[8px] mb-[40px]">
            Our Products
          </h2>
        </div>
        <div className="flex">
          <div className="flex flex-wrap gap-[45px] justify-center">
            {ProductData.map((item) => (
              <div
                onClick={() => handleShopNowClick(item)}
                className="w-[305px]"
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
                  <img className="h-[259px]" src={item.img} alt="" />
                  <h2 className="font-semibold text-[20px]  text-[#274c5b] text-center">
                    {item.title}
                  </h2>
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
