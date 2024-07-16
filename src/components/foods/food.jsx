import React from "react";
import foodimg1 from '/food1.png'
import foodimg2 from '/food2.png'
import foodimg3 from '/food3.png'

export const Food = () => {
    return <div className="flex gap-[42px] justify-center" >
        <img className="w-[412px]" src={foodimg1} alt="img" />
        <img className="w-[412px]" src={foodimg2} alt="img" />
        <img className="w-[412px]" src={foodimg3} alt="img" />
    </div>
}