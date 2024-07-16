   import { nanoid } from "nanoid"
   import productimg1 from '/public/product-img1.png'
   import productimg3 from '/public/product-img3.png'
import productimg4 from '/public/product-img4.png'
import productimg5 from '/public/product-img5.png'
import productimg6 from '/public/product-img6.png'
   export const OfferData = [
   
     {
        vegetable : true,
        fresh : false,
        millets: false,
        health:false,
        nuts:false,
        img:productimg1,
        title:"Mung Bean",
        discount:"$20.00",
        price:"$11.00",
        id:nanoid(),
     },
     {
        vegetable : false,
        fresh : false,
        millets: true,
        health:false,
        nuts:false,
        img:productimg3,
        title:"White Nuts",
        discount:"$20.00",
        price:"$15.00",
        id:nanoid(),
    },
    {
        vegetable : false,
        fresh : false,
        millets: false,
        health:true,
        nuts:false,
        img:productimg5,
        title:"Mung Bean",
        discount:"$20.00",
        price:"$11.00",
        id:nanoid(),
    },
    {
        vegetable : false,
        fresh : false,
        millets: false,
        health:false,
        nuts:true,
        img:productimg6,
        title:"Brown Hazelnut",
        discount:"$20.00",
        price:"$12.00",
        id:nanoid(),
    },
   ]