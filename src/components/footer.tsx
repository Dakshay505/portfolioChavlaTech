
import logo from "../assets/images/Chawla Tech (1).png";
import linkedin from "../assets/images/linkedin.png";
import yt from "../assets/images/Youtube.png";
import insta from "../assets/images/Instagram.png";
import fb from "../assets/images/Facebook.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>

      <div className="flex flex-col md:flex-col md:mx-[7%]">
        {/* 2023 @ */}
        <div className="text-center mt-3 md:order-none order-last">
          <p className="text-sm">© 2023 Chawla Technologies Pvt. Ltd.</p>
        </div>
        <hr />
        <footer>
          {/* logo */}
          <div className="justify-center gap-5 container mx-auto flex flex-col md:flex-row items-center lg:justify-between py-4">
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-2 md:order-first order-2">
                <div className="bg-primary-green ms-5 h-[7px] w-[14px]"></div>
                <img src={logo} className="h-[18px] w-[180px] md:w-[180px] md:h-[18px] lg:w-[206px] lg:h-[22px]" alt="" />
                <div className="bg-primary-green h-[7px] w-[14px]"></div>
                <div></div>
              </a>
            </div>
            {/* HOME ABOUT */}
            <nav className="flex items-center md:flex-row flex-col gap-[2em] md:mb-0 md:order-2 order-first">
              <Link to="/" className="hover:text-gray-300 text-sm">
                Home
              </Link>
              <Link to="/about-us" className="hover:text-gray-300 text-sm">
                About
              </Link>
              <Link to="/contact-us" className="hover:text-gray-300 text-sm whitespace-nowrap">
                Contact Us
              </Link>
              <Link to="/" className="hover:text-gray-300 text-sm whitespace-nowrap">
              Case Studies
              </Link>
            </nav>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center space-x-2 order-3">
              <a href="#">
                <img
                  className="w-[45px] h-[45px] text-white hover:text-gray-300"
                  src={linkedin}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-[45px] h-[45px] text-white hover:text-gray-300"
                  src={fb}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-[45px] h-[45px] text-white hover:text-gray-300"
                  src={insta}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-[45px] h-[45px] text-white hover:text-gray-300"
                  src={yt}
                  alt=""
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}