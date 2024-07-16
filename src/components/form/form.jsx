import React from 'react';

export const SubscribeForm = () => {
  return (
    <div className="container bg-center bg-cover bg-formbg rounded-[15px]">
    <div className="flex items-center justify-center pt-[105px]  pb-[105px]  pr-[71px]  pl-[71px] ">

      <div className="text-white flex gap-[326px] items-center">
        <div className='w-[397px]'>

        <h2 className="mb-4 text-[50px] font-extrabold">Subscribe to our Newsletter</h2>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-2 text-gray-900 rounded-l-md focus:outline-none w-[350px] h-[80px]"
          />
          <button className="px-4 py-2 text-white bg-blue-700 rounded-r-md hover:bg-blue-800  h-[80px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
