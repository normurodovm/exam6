import React from "react";
import { Hero } from "../../components/hero/hero";
import { ShopProduct } from "./product/shop-product";
import { Footer } from "../../components/footer/footer";
import { SubscribeForm } from "../../components/form/form";
export const Shop = () => {
    return <div>
        <ShopProduct/>
        <section className="mt-[140px]">
        <SubscribeForm/>
      </section>
        <section className="pt-[117px]">
      <Footer/>
      </section>
    </div>
}