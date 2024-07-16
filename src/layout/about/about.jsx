import React from "react";
import { Footer } from "../../components/footer/footer";
import { SubscribeForm } from "../../components/form/form";
import { Offer } from "../../components/offer/offer";
export const About = () => {
    return <>
     <div className="bg-cover bg-aboutbg bg-center h-[400px]">
        <div className="container">
            
        </div>
    </div>
    <section className="bg-[#274C5B] mt-[202px] pt-[250px] pb-[250px]">
        <Offer/>
    </section>
    <section className="mt-[141px]">
        <SubscribeForm/>
      </section>
      <section className="pt-[117px]">
      <Footer/>
      </section>
    </>
}