import phone from "../assets/images/PhoneCallw.png";
import logo from "../assets/images/Chawla Tech (1).png";
import linkedin from "../assets/images/linkedin.png";
import yt from "../assets/images/Youtube.png";
import insta from "../assets/images/Instagram.png";
import fb from "../assets/images/Facebook.png";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center my-16 gap-[25px] justify-center h-[165px]">
        <div>
          <h1 className="font-nexa text-[30px] md:text-5xl font-extrabold leading-20 tracking-normal text-center text-primary-dark">
            Ready to get Started?
          </h1>
        </div>
        <div>
          <button
            type="button"
            className=" bg-primary-dark flex gap-2 items-center focus:ring-4 focus:ring-green-300 border  font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            <img src={phone} className="h-5 w-5" alt="" />
            <span className="font-inter text-[12px] md:text-base md:font-medium leading-7 tracking-tight text-white text-center">
              Let’s get on a call
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-col">
        <div className="text-center">
          <p>© 2023 Chawla Technologies Pvt. Ltd.</p>
        </div>
        <hr />

        <footer>
          <div className="flex justify-center gap-6 container mx-auto flex flex-wrap items-center lg:justify-between py-4">
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-5">
                <div className="bg-primary-green h-[7px] w-[14px]"></div>
                <img src={logo} className="h:[20px] w-[135px] md:w-[206px] md:h-[22px]" alt="" />
                <div className="bg-primary-green h-[7px] w-[14px]"></div>
                <div></div>
              </a>
            </div>
            <nav className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </nav>
            <div className="flex items-center space-x-2">
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
