import React from "react";
import { FeedbackData } from "../data/feedback-data";
import { Rating } from "../../../assets/img/rating-icon";
import { FeedbackIcon } from "../img/feedback-icon";
import { Degre } from "./degree/degre";
export const Feedback = () => {
    return <div className="">
        <div className="container">
            <div>
                {
                    FeedbackData.map((item) => (
                        <div className="pt-[164px] pb-[164px] text-center max-w-[1108px] mx-auto" key={item.id}>
                            <h2 className="text-[36px] font-normal text-[#7eb693] font-[yellowtail]">{item.title}</h2>
                            <p className="font-extrabold text-[50px] text-[#274c5b]">{item.text}</p>
                            <img className="mt-[60px] mb-[20px] mx-auto" src={item.img} alt="" />
                            <div className=" mx-auto max-w-[92px]">
                                <Rating/>

                                </div>
                                
                            <p className="font-normal text-[18px] text-[#525c60] mt-[25px] mb-[20px] max-w-[780px] mx-auto">{item.description}</p>
                            <p className="font-semibold text-[25px] text-[#274c5b] ">{item.customer}</p>
                            <p className="text-[15px] mb-[19px]">{item.consumer}</p>
                            <div className=" mx-auto max-w-[35px]">
                            <FeedbackIcon/>
                            </div>
                            <div className="border border-[#e0e0e0] mt-[102px] mb-[90px]">

                            </div>
                            <div className="flex gap-[62px] justify-center">
                                <Degre title={"organic"} count={"100%"}/>
                                <Degre title={"Active Product"} count={"285"}/>
                                <Degre title={"Organic Orchads"} count={"350+"}/>
                                <Degre title={"Years of Farming"} count={"25+"}/>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
}