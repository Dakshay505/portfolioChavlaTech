import phone from "../assets/images/phone.png";
import logo from "../assets/images/ChawlaTechw.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


export default function Test() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // G

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  type NavLinks = {
    name: string;
    link: string;
  }[];

  const navLink: NavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About-us",
      link: "/about-us",
    },
    {
      name: "Services",
      link: "/Services",
    },
    {
      name: "Case Studies",
      link: "/CaseStudies",
    },
  ];

  return (
    <nav className="fixed bg-primary-dark w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="md:justify-between flex flex-wrap  gap-[10px] items-center justify-between md:mx-[6%] mx-auto p-4">
        <Link to="/" className="flex items-center gap-[5px] md:m-auto xl:m-0">
          <div className="bg-primary-green h-[7px] w-[14px]"></div>
          <img src={logo} className="w-[109px] lg:w-[206px] lg:h-[22px]" alt="" />
          <div className="bg-primary-green h-[7px] w-[14px]"></div>
          <div></div>
        </Link>
        <div className="flex gap-[32px] md:order-2 md:m-auto xl:m-0">
          <div className="hidden md:flex md:order-2">
            <Link to="/contact-us">
              <button
                type="button"
                className="hidden md:flex gap-[10px] text-white items-center focus:ring-4  border-2 border-primary-green font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                <img src={phone} className="h-[15px] w-[16px]" alt="" />
                Get in touch
              </button>
            </Link>
          </div>
          <div className="md:hidden order-2">
            <button
              type="button"
              className="text-white focus:ring-4 focus:ring-green-300"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:block md:order-1 w-full md:w-[75%] md:pl-0 lg:pl-[17rem]  lg:w-[auto] ${menuOpen ? "block" : "hidden"
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col justify-center w-[50%] md:w-full m-auto items-center text-[9px] md:text-[12px] lg:text-[18px] md:gap-3 md:flex-row md:p-0 mt-4 font-medium md:space-x-8 md:mt-0">
            {navLink.map((item, index) => {
              const isActive = location.pathname === item.link ;
              return (
                <Link to={item.link} key={index}>
                  <div
                    className={`block py-2 ${isActive ? "text-primary-green" : "text-white"}`}
                  >
                    <p>{item.name}</p>
                  </div>
                </Link>
              );
            })}
          </ul>
          <div className="md:hidden mt-[10px]  justify-center flex md:order-2">
            <Link to="/contact-us" className=" px-[8px]">
              <button
                type="button"
                className="md:hidden flex w-[140px] text-[9px] px-[25px] gap-[10px] text-white items-center focus:ring-4  border-2 border-primary-green font-medium rounded-full text-sm  py-2 text-center mr-3  "
              >
                <img src={phone} className="h-[12px] w-[12px]" alt="" />
                <span className="text-[10px]">

                  Get in touch
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
