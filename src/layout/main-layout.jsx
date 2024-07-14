import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Header } from "./header.jsx/header";
import { HeaderIcon } from "../assets/img/header-icon1";
import { HeaderIcon2 } from "../assets/img/header-icon2";
export const MainLayout = () => {
  return (
    <div className="container">
      <div className="flex gap-[100px] items-center pt-[69px] pb-[69px]">
        <div>
            <Header/>
        </div>
        <div>
          <Link className=" font-[roboto] font-bold text-[20px]" to="/">home</Link>
        </div>
        <div>
          <Link className=" font-[roboto] font-bold text-[20px]" to="/about">about</Link>
        </div>
        <div>
          <Link className=" font-[roboto] font-bold text-[20px]" to="/shop">Shop</Link>
        </div>
        <div>
          <Link className=" font-[roboto] font-bold text-[20px]" to="/shop-single">Shop-single</Link>
        </div>
        <div className="flex items-center space-x-4">
    <div className="relative flex items-center">
        <input type="text" placeholder="Search..." className="px-4 py-2 w-64 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500" />
        <button className="absolute right-0 mr-1 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
            <HeaderIcon/>
        </button>
    </div>
    <div className="flex items-center space-x-2 bg-white p-2 rounded-full border">
        <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center">
        <HeaderIcon2/>
        </div>
        <span className="text-gray-700">Cart (0)</span>
    </div>
</div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
