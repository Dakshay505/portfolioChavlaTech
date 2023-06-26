import { useState } from "react";
import phone from "../assets/images/phone.png";
import logo from "../assets/images/ChawlaTechw.png";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed bg-primary-dark w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center gap-[5px]">
            <div className="bg-primary-green h-[7px] w-[14px]"></div>
            <img src={logo} className="w-[206px] h-[22px]" alt="" />
            <div className="bg-primary-green h-[7px] w-[14px]"></div>
            <div></div>
          </a>

          <div className="flex md:order-2">
            <button
              type="button"
              className="hidden lg:flex gap-[10px] text-white items-center focus:ring-4focus:ring-green-300 border border-green-500 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600  dark:focus:ring-green-800"
            >
              <img src={phone} className="h-[15px] w-[16px]" alt="" />
              Get on a Call
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block md:order-1 w-full md:w-auto`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded md:text-primary-green md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded md:hover:text-primary-green md:p-0 dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded-full md:hover:text-primary-green md:p-0"
                >
                  Contact Us
                </a>
              </li>
              <li className="md:hidden lg:hidden">
                <button
                  type="button"
                  className="block flex justify-center items-center gap-[10px] border border-primary-green py-2 pl-3 pr-4 text-white rounded md:text-primary-green md:p-0"
                >
                  <img src={phone} className="h-[15px] w-[16px]" alt="" />
                  Get on a Call
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
