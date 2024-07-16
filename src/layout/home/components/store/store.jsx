import React from "react";
import storeimg from '/store.png'
export const Store = () => {
  return (
    <div className="flex">
    <div>
                    <img className="w-[1000px]" src={storeimg} alt="" />
            </div>
      <div className="container mx-auto py-16 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:mr-8">
          <h2 className="text-green-600 text-xl font-semibold mb-2">Eco Friendly</h2>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">Econis is a Friendly Organic Store</h1>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Start with Our Company First</h3>
            <p className="text-gray-600 mb-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Learn How to Grow Yourself</h3>
            <p className="text-gray-600 mb-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.</p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Farming Strategies of Today</h3>
            <p className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.</p>
          </div>
        </div>
      </div>
      </div>
  );
};
