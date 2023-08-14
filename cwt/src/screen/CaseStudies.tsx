
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../components/navbar"
import curveBackground from '../assets/images/curve-background.png'
import greenCurve from '../assets/images/green-curve.png'
import { Carousel } from 'react-responsive-carousel';
import img from "../assets/images/1.png"
import img1 from "../assets/images/2.jpg"
import img2 from "../assets/images/3.jpg"
import img3 from "../assets/images/3.jpg"
import { Link } from "react-router-dom";
import right from "../assets/images/right.png"
import service1 from "../assets/images/6.png"
import service2 from "../assets/images/7.png"
import service3 from "../assets/images/8.png"
import service4 from "../assets/images/9.png"
import { useState } from "react";

export const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setActiveIndex(index);
  };

  const slides = [
    { text: 'UI/UX' },
    { text: 'App Service' },
    { text: 'Web Service' },
    { text: 'Digital Marketing' },
  ];


  return (
    <div>
      {/* carousel */}
      <div className="parent-div  relative mt-[65px]  w-full">
        <Navbar />
        <Carousel className="pb-[3rem] z-[99999999999] md:hidden ">
          <div>
            <img src={img1} className="h-[280px] md:h-[750px] w-auto" />

            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">
                <h1 className=" text-primary-green text-[22px] leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">UX/UI  Service</p>
              </div>
              <Link to="">
                <button className="bg-[#8DE29E] text-black hover:cursor-pointer px-5 py-[8px] md:py-[30px] flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm ">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>
          <div>
            <img src={img2} className="h-[280px] md:h-[750px] w-auto" />
            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">

                <h1 className=" text-primary-green text-[22px] leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">App Service</p>
              </div>
              <Link to="">
                <button className="bg-[#8DE29E] text-black hover:cursor-pointer py-[8px] md:py-[30px] px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>
          <div>
            <img src={img3} className="h-[280px] md:h-[750px] w-auto" />
            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">

                <h1 className=" text-primary-green text-[22px]  leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">Web Service</p>
              </div>
              <Link to="">
                <button className="bg-[#8DE29E] py-[8px] text-black md:py-[30px] hover:cursor-pointer px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>
          <div>
            <img src={img} className="h-[280px] md:h-[750px] w-auto" />
            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">
                <h1 className=" text-primary-green text-[22px] leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">Digital Service</p>
              </div >
              <Link to="">
                <button className="bg-[#8DE29E] py-[8px] text-black md:py-[30px] hover:cursor-pointer px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>

        </Carousel>

        <Carousel
          showThumbs={false}
          selectedItem={activeIndex}
          onChange={handleDotClick}
          renderIndicator={(onClickHandler, isSelected, index) => (
            <div
              className={`custom-dot ${isSelected ? 'active' : ''}`}
              onClick={(event) => onClickHandler(event)}
            >
              {slides[index].text}
            </div>
          )}
           className="hidden md:block pb-[3rem] z-[99999999999]">

          <div>
            <img src={img1} className="h-[280px] md:h-[750px] w-auto" />

            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">
                <h1 className=" text-primary-green text-[22px] leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">UX/UI  Service</p>
              </div>
              <Link to="">
                <button className="bg-[#8DE29E] text-black hover:cursor-pointer px-5 py-[8px] md:py-[30px] flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>
          <div>
            <img src={img2} className="h-[280px] md:h-[750px] w-auto" />
            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">

                <h1 className=" text-primary-green text-[22px] leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">App Service</p>
              </div>
              <Link to="">
                <button className="bg-[#8DE29E] text-black hover:cursor-pointer py-[8px] md:py-[30px] px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>
          <div>
            <img src={img3} className="h-[280px] md:h-[750px] w-auto" />
            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">

                <h1 className=" text-primary-green text-[22px]  leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">Web Service</p>
              </div>
              <Link to="">
                <button className="bg-[#8DE29E] text-black py-[8px] md:py-[30px] hover:cursor-pointer px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>
          <div>
            <img src={img} className="h-[280px] md:h-[750px] w-auto" />
            <div className="legend md:justify-center ">
              <div className="flex flex-col gap-[16px]">
                <h1 className=" text-primary-green text-[22px] leading-7 md:text-[48px] font-medium">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
                <p className="text-[12px] md:text-[25px]">Digital Service</p>
              </div >
              <Link to="">
                <button className="bg-[#8DE29E] py-[8px] text-black md:py-[30px] hover:cursor-pointer px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                  <p className="text-sm">Read Case Study</p>
                  <img src={right} />
                </button></Link>
            </div>
          </div>

        </Carousel>

        <div className='relative md:-mt-[130px] -mt-[85px] w-full overflow-hidden pt-2'>
          <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
          <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
        </div>
      </div>

      <div className="parent-div md:m-auto w-100%   md:mx-[7rem] ">
        <div className="mx-[10px] relative mt-[-8rem] md:mt-[-15rem] pb-[27rem]">
          <div className=" text-[20px] py-[20px] md:text-[40px] font-bold  text-black text-center mx-5 ">
            Our Services
          </div>

          <div className="flex flex-col gap-[32px]">
            <div className="bg-white flex shadow-lg flex-col md:flex-row md:justify-center md:items-center gap-[30px] border py-[16px] px-[18px] rounded-[20px]">
              <div>
                <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#HR Management</span>
                <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#Technology</span>
                <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#AI</span>
                <img src={service2} alt="" className="rounded-[20px] md:w-[470px] md:h-[400px]" />
              </div>
              <div className="flex flex-col md:items-start md:gap-[0px] md:w-[643px] ">
                <div className="text-[15px] md:text-left font-bold md:text-[42px] md:leading-[3rem] text-center">Creating a Tech-Driven Future: Your Success, Our Mission</div>
                <div className="font-[poppins] text-[12px] md:text-left md:text-[25px] tracking-tighter text-center pt-2">
                  Lörem ipsum il loba telesaras. Dekangen. Den titus spelifyras. Säg neskapet gala in det åbelt. Tigt ede spena som pol...
                </div>
                <div >
                  <Link to="" className="flex mt-[2rem] md:mt-[55px] justify-center items-center border border-black border-1 rounded-lg">
                    <button className="bg-white hover:cursor-pointer text-center px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                      <p className="text-sm">View More</p>
                      <img src={right} className="w-[16px] h-[16px]" />
                    </button></Link>

                </div>
              </div>
            </div>
            <div className="bg-white flex shadow-lg flex-col md:flex-row md:justify-center md:items-center gap-[30px] border py-[16px] px-[18px] rounded-[20px]">
              <div>
              <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#App Service </span>
              <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#Technology</span>
                <img src={service3} alt="" className="rounded-[20px] md:w-[470px] md:h-[400px]" />
              </div>
              <div className="flex flex-col md:items-start md:gap-[0px] md:w-[643px] ">
                <div className="text-[15px] md:text-left font-bold md:text-[42px] md:leading-[3rem] text-center">Creating a Tech-Driven Future: Your Success, Our Mission</div>
                <div className="font-[poppins] text-[12px] md:text-left md:text-[25px] tracking-tighter text-center pt-2">
                  Lörem ipsum il loba telesaras. Dekangen. Den titus spelifyras. Säg neskapet gala in det åbelt. Tigt ede spena som pol...
                </div>
                <div >
                  <Link to="" className="flex mt-[2rem] md:mt-[55px] justify-center items-center border border-black border-1 rounded-lg">
                    <button className="bg-white hover:cursor-pointer text-center px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                      <p className="text-sm">View More</p>
                      <img src={right} className="w-[16px] h-[16px]" />
                    </button></Link>

                </div>
              </div>
            </div>
            <div className="bg-white flex shadow-lg flex-col md:flex-row md:justify-center md:items-center gap-[30px] border py-[16px] px-[18px] rounded-[20px]">
              <div>
              <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#UI/ UX</span>
              <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#E-Commerce</span>
                <img src={service4} alt="" className="rounded-[20px] md:w-[470px] md:h-[400px]" />
              </div>
              <div className="flex flex-col md:items-start md:gap-[0px] md:w-[643px] ">
                <div className="text-[15px] md:text-left font-bold md:text-[42px] md:leading-[3rem] text-center">Creating a Tech-Driven Future: Your Success, Our Mission</div>
                <div className="font-[poppins] text-[12px] md:text-left md:text-[25px] tracking-tighter text-center pt-2">
                  Lörem ipsum il loba telesaras. Dekangen. Den titus spelifyras. Säg neskapet gala in det åbelt. Tigt ede spena som pol...
                </div>
                <div >
                  <Link to="" className="flex mt-[2rem] md:mt-[55px] justify-center items-center border border-black border-1 rounded-lg">
                    <button className="bg-white hover:cursor-pointer text-center px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                      <p className="text-sm">View More</p>
                      <img src={right} className="w-[16px] h-[16px]" />
                    </button></Link>

                </div>
              </div>
            </div>
            <div className="bg-white flex shadow-lg flex-col md:flex-row md:justify-center md:items-center gap-[30px] border py-[16px] px-[18px] rounded-[20px]">
              <div>
              <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#Digital Marketing</span>
              <span className="relative px-[8px] md:px-[20px] text-[8px] py-[5px] md:text-[13px] font-[700] md:py-[10px] mx-[10px] rounded-full bg-white top-[10rem] md:top-[23rem] md:left-[24px]  text-black">#Branding</span>
                <img src={service1} alt="" className="rounded-[20px] md:w-[470px] md:h-[400px]" />
              </div>
              <div className="flex flex-col md:items-start md:gap-[0px] md:w-[643px] ">
                <div className="text-[15px] md:text-left font-bold md:text-[42px] md:leading-[3rem] text-center">Creating a Tech-Driven Future: Your Success, Our Mission</div>
                <div className="font-[poppins] text-[12px] md:text-left md:text-[25px] tracking-tighter text-center pt-2">
                  Lörem ipsum il loba telesaras. Dekangen. Den titus spelifyras. Säg neskapet gala in det åbelt. Tigt ede spena som pol...
                </div>
                <div >
                  <Link to="" className="flex mt-[2rem] md:mt-[55px] justify-center items-center border border-black border-1 rounded-lg">
                    <button className="bg-white hover:cursor-pointer text-center px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                      <p className="text-sm">View More</p>
                      <img src={right} className="w-[16px] h-[16px]" />
                    </button></Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
