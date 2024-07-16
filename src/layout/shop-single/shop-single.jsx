import React from "react";
import { ProductData } from "../../components/products/products-data";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ShopProductData } from "../shop/product/shop-product-data";
import { Rating } from "../../assets/img/rating-icon";
import { HomeAboutIcon } from "../home/components/home-about-icon1";
import { Footer } from "../../components/footer/footer";
import { SubscribeForm } from "../../components/form/form";
export const ShopSingle = () =>{
        const location = useLocation();
        const item = location.state;
      
        return (
          <div>
            {item ? (
              <>

              <div className="container">
                <div className="flex gap-[90px] justify-center items-center" >
                <div>
                    <img  src={item.img} alt={item.title} />
                </div>
                <div className="w-[658px]">
                  <h1 className="font-semibold text-[40px] text-[#274c5b]">{item.title}</h1>
                  <Rating/>
                  <h2>{item.description}</h2>
                  <p>{item.text}</p>
                  <div className="flex gap-[10px] mt-[13px] mb-[30px]">
                    <div className="flex items-center gap-[15px]">
                      <div className="relative inline-block">
                      <span className="text-gray-400 text-[15px]">
                        {item.discount}
                      </span>
                      <span className="absolute inset-0 border-t-2 border-gray-400 top-1/2 transform -translate-y-1/1"></span>
                    </div>
                      <p className="text-[25px] font-bold text-[#274c5b]">{item.price}</p>
                      </div>
                  </div>
                      <p className="text-[#525c60] text-[18px] font-normal">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                      <div className="flex gap-4 items-center mt-[35px]">
                        <h2 className="font-bold text-[20px] text-[#274c5b]">Quantity :</h2>
                        <h2 className="text-center pt-[20px] pb-[20px] pl-[61px] pr-[61px] border-[#274c5b] border-[3px] rounded-[16px] w-[134px] text-[20px]" >1</h2>
                        <button className="flex gap-1 items-center pt-[20px] pb-[20px] pr-[30px] pl-[30px] bg-[#274c5b] rounded-[16px] text-white font-bold text-[20px]">Add To Cart
                          <HomeAboutIcon/>
                        </button>
                      </div>
                </div>
                </div>

               
              </div>
              </>
            )
             : (
              <p>No item selected</p>
            )
            }
            <section className="mt-[140px]">
            <SubscribeForm/>
          </section>
            <section className="pt-[117px]">
          <Footer/>
          </section>
          </div>
          
        );
      };