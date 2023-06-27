import "../index.css"
import phone_icon from "../assets/images/phone_icon.png"
import property from "../assets/images/Property 1=Frame 102.png"
import triangle from "../assets/images/triangle.png"
import square from "../assets/images/square.png"
import circle from "../assets/images/circle.png"
import analytics from "../assets/images/analytics.png"
import ai from "../assets/images/ai.png"
import bitbucker from "../assets/images/bitbucker.png"
import bootstrap from "../assets/images/bootstrap.png"
import aws from "../assets/images/aws.png"
import aws_ec2 from "../assets/images/aws-ec2.png"
import bootstrap4 from "../assets/images/bootstrap4.png"
import bootstrap5 from "../assets/images/bootstrap5.png"
import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import gitlab from "../assets/images/gitlab.png"
import id from "../assets/images/id.png"
import jamstack from "../assets/images/jamstack.png"
import js from "../assets/images/js.png"
import mongodb from "../assets/images/mongodb.png"
import nodejs from "../assets/images/nodejs.png"
import php from "../assets/images/php.png"
import python from "../assets/images/python.png"
import ps from "../assets/images/ps.png"
import reactjs from "../assets/images/reactjs.png"
import rust from "../assets/images/rust.png"
import saas from "../assets/images/sass.png"
import sveltejs from "../assets/images/sveltejs.png"
import vitejs from "../assets/images/vitejs.png"
import vs from "../assets/images/vs.png"
import xd from "../assets/images/xd.png"
import Iconpack from "../assets/images/Icon pack.png"
import Marquee from "react-fast-marquee";
import nextjs from "../assets/images/nextjs.png"
import { useEffect, useState } from "react"
import curveBackground from '../assets/images/curve-background.png'
import greenCurve from '../assets/images/green-curve.png'

export default function homePage() {
  const [call, setCall] = useState(0);
  const [client, setClient] = useState(0);
  const [customers, setCustomers] = useState(0);
  const callFinalValue = 20;
  const clientFinalValue = 100;
  const customersFinalValue = 1000;
  const animationDuration = 2000;
  const callInterval = animationDuration / callFinalValue;
  const clientInterval = animationDuration / clientFinalValue;
  const customersInterval = animationDuration / customersFinalValue;

  useEffect(() => {
    let currentValue = 0;
    const timer = setInterval(() => {
      setCall(currentValue);
      currentValue++;

      if (currentValue > callFinalValue) {
        clearInterval(timer);
      }
    }, callInterval);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    let currentValue = 0;
    const timer = setInterval(() => {
      setClient(currentValue);
      currentValue++;

      if (currentValue > clientFinalValue) {
        clearInterval(timer);
      }
    }, clientInterval);

    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    let currentValue = 0;
    const timer = setInterval(() => {
      setCustomers(currentValue);
      currentValue++;

      if (currentValue > customersFinalValue) {
        clearInterval(timer);
      }
    }, customersInterval);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="w-full">
      <div className="bg-primary-dark md:pt-[5rem] pt-[8rem]">
        <div className="flex md:flex-row flex-col-reverse justify- md: justify-between md:mx-[7%] items-center bg-primary-dark">
          <div className="flex flex-col w-[80%] md:w-[45%] px-0 gap-10">
            <div className="flex flex-col space-y-5">
              <h1 className="text-primary-green text-3xl md:text-5xl font-medium">Outpace the Competition with Cutting-Edge Tech</h1>
              <p className="md:text-md text-sm text-primary-light">Lorem ipsum dolor sit amet consectetur. Ac laoreet bibendum quisque orci sagittis vel. Etiam dolor in nec facilisis. Aliquet urna purus feugiat.</p>
              <button className="bg-[#8DE29E] flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                <img src={phone_icon} alt="phone" className="w-5" />
                <p>Let’s get on a call</p>
              </button>
            </div>
            <div className="flex space-x-5 items-center">
              <div className="flex flex-col space-y-2">
                <h2 className="text-[#8DE29E] text-xl">250+</h2>
                <p className="text-[#F2F2F2]">Clients onboarded</p>
              </div>
              <div className="bg-[#F2F2F2] w-[0.3px] h-[3rem]"></div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-[#8DE29E] text-xl">100%</h2>
                <p className="text-[#F2F2F2]">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={property} alt="image" className="rotating md-w-full w-[80%]" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-primary-green w-[75%] h-[0.01em]"></div>
        </div>

        <div className="flex flex-col items-center justify-center mt-20 ">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-primary-green w-[80%] md:w-[50%] text-center md:text-3xl font-bold">Tap Into Your Potential with Our Comprehensive Service Suite</h1>
            <p className="text-primary-light md:text-md  w-[80%] text-center ">Our services are designed to empower your business, providing innovative solutions tailored to your unique needs. From cutting-edge technology to expert consultation, we've got you.</p>
          </div>
        </div>

        <div className="mt-[8rem] pb-32 flex flex-col items-center space-y-10">
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[70%] h-[8rem] rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-2xl md:text-4xl md:w-[40%]">Web Developement</h1>
            <p className="text-primary-light text-center mt-1 text-sm md:text-md font-semibold">Elevate User Experiences with our Unparalleled UI/UX Expertise</p>
            <div>
              <img src={triangle} alt="" className="rotating md:w-[10%] absolute w-[20%] inset-0 md:left-[-3.5rem] md:top-3 top-[-3rem] left-[40%] right-[40%]" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[70%] h-[8rem] rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-2xl md:text-4xl md:w-[40%]">UI/UX Design</h1>
            <p className="text-primary-light text-center mt-1 text-sm md:text-md font-semibold">Elevate User Experiences with our Unparalleled UI/UX Expertise</p>
            <div>
              <img src={square} alt="" className="rotating md:w-[10%] absolute w-[20%] inset-0 md:left-[-3.5rem] md:top-3 top-[-3rem] left-[40%] right-[40%]" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[70%] h-[8rem] rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-2xl md:text-4xl md:w-[40%]">App Developement</h1>
            <p className="text-primary-light text-center mt-1 text-sm md:text-md font-semibold">Elevate User Experiences with our Unparalleled UI/UX Expertise</p>
            <div>
              <img src={circle} alt="" className="rotating md:w-[10%] absolute w-[20%] inset-0 md:left-[-3.5rem] md:top-3 top-[-3rem] left-[40%] right-[40%]" />
            </div>
          </div>
        </div>
        <div className='relative w-full overflow-hidden'>
          <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
          <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-50' />
        </div>
      </div>
      <div className="h-[100vh] bg-white mt-[8rem] z-50  flex flex-col items-center min-w-[20vw] max-w-[100vw]">
        <div className="flex flex-col space-y-3 item-center justify-center mb-10">
          <div>
            <h1 className="text-primary-dark text-center text-3xl font-bold">Tech stack that serves you well today and when</h1> <h1 className="text-primary-dark text-center text-3xl font-bold"> you grow 10x in the next 24 months.</h1>
          </div>
          <div>
            <p className="text-[#575757] text-md text-center font-semibold">Get an unbiased perspective on the best frameworks and tools for your project. With </p>
            <p className="text-[#575757] text-md text-center font-semibold">70+ completed projects, we’ve seen enough to save you from trouble.</p>
          </div>
        </div>
        {/* icons */}
        <div className="md:mt-20 flex  flex-col gap-[0rem] md:gap-[3rem] lg:w-full w-[100vw]">
          <Marquee speed={50}>
            <div className="flex flex-row  gap-[2rem] px-0">
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={analytics} alt="analytics" className="w-[7rem] " />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={ai} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={bitbucker} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={bootstrap} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={aws} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={aws_ec2} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={bootstrap4} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={bootstrap5} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={git} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={github} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={gitlab} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={id} alt="analytics" className="w-[7rem]" />
              </div>
            </div>
          </Marquee>
          <Marquee speed={85}>
            <div className="flex flex-row  gap-[3rem] px-0">
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={jamstack} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={xd} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={bootstrap4} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={bootstrap5} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={git} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={python} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={vitejs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={vs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={ps} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={reactjs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={rust} alt="analytics" className="w-[7rem]" />
              </div>
            </div>
          </Marquee>

          <Marquee speed={60}>
            <div className="flex flex-row  gap-[3.5rem] px-0">
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={js} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={mongodb} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={nodejs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={php} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={python} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={ps} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={reactjs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={rust} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={saas} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={sveltejs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={vitejs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={vs} alt="analytics" className="w-[7rem]" />
              </div>
              <div className="drop-shadow-xl rounded-full w-full">
                <img src={nextjs} alt="analytics" className="w-[7rem]" />
              </div>
            </div>
          </Marquee>
        </div>
        {/* icons */}
      </div>
      <div className="bg-primary-dark pb-[5rem] py-10">
        <div className="flex flex-col space-y-3 items-center text-center mt-10">
          <h1 className="text-primary-green w-[55%] text-xl md:text-4xl font-bold">Tech leaders from leading companies have trusted Brainhub to build impactful software.</h1>
          <p className="text-primary-light w-[55%]">Companies from fintech, healthcare, education, game dev, IoT and martech work with us <br /> to grow their business through great software.</p>
        </div>
        <div className="flex mt-[5rem] md:flex-row md:px-0 px-5 flex-col gap-10 md:gap-[10rem] items-center justify-center md:justify-between md:mx-[7%]">
          <div className="flex flex-col space-y-5 w-[15rem]">
            <img src={Iconpack} className="w-10" alt="Iconpack" />
            <p className="text-primary-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div>
              <p className="text-primary-green font-semibold text-sm md:text-xl">Lora Smith</p>
              <p className="text-primary-light">CEO & Founder Crix</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-[15rem]">
            <img src={Iconpack} className="w-10" alt="Iconpack" />
            <p className="text-primary-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div>
              <p className="text-primary-green font-semibold text-sm md:text-xl">Lora Smith</p>
              <p className="text-primary-light">CEO & Founder Crix</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-[15rem]">
            <img src={Iconpack} className="w-10" alt="Iconpack" />
            <p className="text-primary-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div>
              <p className="text-primary-green font-semibold text-sm md:text-xl">Lora Smith</p>
              <p className="text-primary-light">CEO & Founder Crix</p>
            </div>
          </div>
        </div>
        <div className="flex mt-[5rem] items-center justify-center">
          <div className="bg-primary-green w-[75%] h-[0.01em]"></div>
        </div>
        <div className="mt-[5rem] flex flex-col md:p-0 px-7 space-y-[5rem] items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-primary-green text-3xl font-bold">Trusted by 15+ eCommerce Businesses</h1>
          </div>
          <div className="flex md:flex-row flex-col md:p-0 p-5 justify-between gap-[5rem]">
            <div className="w-[10rem] lg:w-[15rem] md:w-[12em] h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
              <p className="text-[3rem] font-bold text-primary-green">{call}+</p>
              <p className="text-primary-light">Onboarding Calls</p>
            </div>
            <div className="w-[10rem] lg:w-[15rem] md:w-[12em] h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
              <p className="text-[3rem] font-bold text-primary-green">{client}%</p>
              <p className="text-primary-light">Client Satisfaction</p>
            </div>
            <div className="w-[10rem] lg:w-[15rem] md:w-[12em] h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
              <p className="text-[3rem] font-bold text-primary-green">{customers}+</p>
              <p className="text-primary-light">Customers impacted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}