import React from "react";

export const Degre = ({count,title}) => {
    return <div className="items-center justify-center w-32 h-32 bg-white border-2 border-green-400 rounded-full shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mt-8">{count}</h2>
        <p className="text-sm text-gray-600">{title}</p>
    </div>
}