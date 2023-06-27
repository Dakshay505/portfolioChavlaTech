import phone from "../assets/images/phone.png";
import logo from "../assets/images/ChawlaTechw.png";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="fixed bg-primary-dark w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="md:justify-between flex flex-wrap  items-center justify-center md:mx-[6%] mx-auto p-4">
          <Link to="/" className="flex items-center gap-[5px]">
            <div className="bg-primary-green h-[7px] w-[14px]"></div>
            <img src={logo} className="w-[150px] lg:w-[206px] lg:h-[22px]" alt="" />
            <div className="bg-primary-green h-[7px] w-[14px]"></div>
            <div></div>
          </Link>

          <div className="flex md:order-2">
            <button
              type="button"
              className="hidden md:flex gap-[10px] text-white  items-center focus:ring-4focus:ring-green-300 border border-green-500 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600  dark:focus:ring-green-800"
            >
              <img src={phone} className="h-[15px] w-[16px]" alt="" />
              Get on a Call
            </button>
          </div>

          <div
            className=" md:block md:order-1 w-full md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex justify-center gap-3 flex-row md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 ">
              <li>
                <Link
                  to="/"
                  className="block py-2  text-white rounded md:text-primary-green"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="block py-2  text-white rounded md:hover:text-primary-green dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="block py-2  text-white rounded-full md:hover:text-primary-green"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
