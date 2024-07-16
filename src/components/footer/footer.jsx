import React from "react";
import { HeaderLogo } from "../../assets/img/header-logo";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">Email</p>
          <a href="mailto:needhelp@organia.com" className="text-blue-600 hover:underline">
            needhelp@organia.com
          </a>
          <p className="text-gray-600">Phone</p>
          <p className="text-gray-800">666 888 888</p>
          <p className="text-gray-600">Address</p>
          <p className="text-gray-800">88 road, borklyn street, USA</p>
        </div>

        <div className="text-center md:text-center mb-6 md:mb-0">
          <div className="mx-auto mb-2">
            <HeaderLogo />
          </div>
          <p className="text-gray-600">Simply dummy text of the printing and typesetting industry.</p>
          <p className="text-gray-600">Lorem Ipsum simply dummy text of the printing.</p>
          <div className="flex justify-center mt-4 space-x-4">

            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold text-gray-800">Utility Pages</h2>
          <ul>
            <li><a href="#" className="text-gray-600 hover:underline">Style Guide</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">404 Not Found</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Password Protected</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Licences</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Changelog</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-gray-600">
        <p>Copyright &copy; Organick | Designed by VictorFlow Templates | Powered by Webflow</p>
      </div>
    </footer>
  );
};
