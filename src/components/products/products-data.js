import { nanoid } from "nanoid";
import productimg1 from '/public/product-img1.png'
import productimg2 from '/public/product-img2.png'
import productimg3 from '/public/product-img3.png'
import productimg4 from '/public/product-img4.png'
import productimg5 from '/public/product-img5.png'
import productimg6 from '/public/product-img6.png'
import productimg7 from '/public/product-img7.png'
import productimg8 from '/public/product-img8.png'
import productimg9 from '/public/product-img9.png'
import productimg10 from '/public/product-img10.png'
import productimg11 from '/public/product-img11.png'
import productimg12 from '/public/product-img12.png'
export const ProductData = [
    {
        vegetable : true,
        fresh : false,
        millets: false,
        health:false,
        nuts:false,
        img:productimg1,
        title:"Calabrese Broccoli",
        discount:"$20.00",
        price:"$13.00",
        id:nanoid(),
    },
    {
        vegetable : false,
        fresh : true,
        millets: false,
        health:false,
        nuts:false,
        img:productimg2,
        title:"Fresh Banana Fruites",
        discount:"$20.00",
        price:"$14.00",
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
        vegetable : true,
        fresh : false,
        millets: false,
        health:false,
        nuts:false,
        img:productimg4,
        title:"Vegan Red Tomato",
        discount:"$20.00",
        price:"$17.00",
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
    {
        vegetable : false,
        fresh : true,
        millets: false,
        health:false,
        nuts:false,
        img:productimg7,
        title:"Eggs",
        discount:"$20.00",
        price:"$17.00",
        id:nanoid(),
    },
    {
        vegetable : false,
        fresh : true,
        millets: false,
        health:false,
        nuts:false,
        img:productimg8,
        title:"Zelco Suji Elaichi Rusk",
        discount:"$20.00",
        price:"$15.00",
        id:nanoid(),
    },

]