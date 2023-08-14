import "../index.css"
import { motion } from "framer-motion"
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
import { Link } from "react-router-dom"
import wphone from "../assets/images/PhoneCallw.png"

import cbg from "../assets/images/blackbg curve.png"
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
      <div className="bg-primary-dark md:pt-[7rem] pt-[5rem]">
        <div className="flex md:flex-row flex-col-reverse justify- md: justify-between md:ms-[7%] items-center bg-primary-dark">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col w-[80%] md:w-[45%] px-0 gap-10 text-center sm:text-start">
            <div

              className="flex flex-col items-center sm:items-start space-y-5">
              <h1 className="text-primary-green text-[28px] leading-7 md:text-5xl font-[700]">Creating a Tech-Driven Future: Your Success, Our Mission</h1>
              <p className="md:text-md  text-sm text-primary-light">Empowering the businesses by providing the top-notch software and consulting services. We the Chawla Tech are highly innovative with cutting edge of minimum time-frame by ensuring that you stay ahead of your competition!</p>
              <Link to="/contact-us"><button className="bg-[#8DE29E] hover:cursor-pointer px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                <img src={phone_icon} alt="phone" className="w-5" />

                <p className="text-sm">Get in Touch</p>
              </button></Link>
            </div>
            <div className="flex space-x-5 justify-center sm:justify-start items-center">
              <div className="flex flex-col space-y-2">
                <h2 className="text-[#8DE29E] text-[22px] sm:text-xl">250+</h2>
                <p className="text-[#F2F2F2] text-[14px]">Clients onboarded</p>
              </div>
              <div className="bg-[#F2F2F2] w-[0.3px] h-[3rem]"></div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-[#8DE29E] text-[22px] sm:text-xl">100%</h2>
                <p className="text-[#F2F2F2] text-[14px]">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center lg:w-[50%] w-[80%]">
            <img src={property} alt="image" className="rotating md-w-full w-[350px] lg:w-[500px] " />
          </div>
        </div>
        <div className="flex items-center mt-5 justify-center mx-[7%]">
          <div className="bg-primary-green w-full h-[0.01em]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center justify-center mt-20 ">
          <div className="flex flex-col gap-[20px] items-center space-y-2">
            <h1 className="text-primary-green w-[80%] md:w-[60%] text-center text-[20px]  sm:leading-[40px] sm:text-[22px] md:text-[28px] font-bold">Chawla tech provided the 99% credibility rate with cutting edge of highly preforming Tech and Innovation.</h1>
            <p className="text-primary-light text-[12px] md:w-[60%]  leading-4 sm:leading-5 sm:text-[15px] md:text-md w-[80%] text-center  ">The innovative solutions we offer are crafted to meet your specific needs with the goal of empowering your company. We've got you covered with the most modern technology and knowledgeable advice.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="mt-[6rem] pb-32 flex flex-col items-center space-y-10 md:px-[7%]">
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[80%] md:h-[10rem] md:p-0 p-5 rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-center leading-6 md:leading-none pt-4 md:pt-0 md:px-5 md:ps-8 text-[22px] md:text-[28px] md:w-[40%]">Web Developement</h1>
            <p className="text-primary-light md:w-[60%] mt-1 text-[14px] pt-2 text-center md:text-md md:text-left">With our exceptional web development expertise, you can boost your online presence.</p>
            <div>
              <img src={triangle} alt="" className="rotating absolute w-[80px] lg:w-[110px] inset-0 md:-left-10 lg:-left-[3.5rem] md:my-auto -top-10 mx-auto md:-top-0 md:mx-0" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[80%] md:h-[10rem] md:p-0 p-5 rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-center leading-6 md:leading-none pt-4 md:pt-0 md:px-5 md:ps-8 text-[22px] md:text-[28px] md:w-[40%]">UI/UX Design</h1>
            <p className="text-primary-light md:w-[60%] mt-1 text-[14px] pt-2 text-center md:text-md md:text-left">With our cutting-edge UI/UX design, you can unleash the power of unforgettable user experiences.</p>
            <div>
              <img src={square} alt="" className="rotating absolute w-[80px] lg:w-[110px] inset-0 md:-left-10 lg:-left-[3.5rem] md:my-auto -top-10 mx-auto md:-top-0 md:mx-0" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[80%] md:h-[10rem] md:p-0 p-5 rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-center leading-6 md:leading-none pt-4 md:pt-0 md:px-5 md:ps-8 text-[22px] md:text-[28px] md:w-[40%]">App Developement</h1>
            <p className="text-primary-light md:w-[60%] mt-1 text-[14px] pt-2 text-center md:text-md md:text-left">Ignite your mobile strategy with our superior app development services, where we bring your ideas to life.</p>
            <div>
              <img src={circle} alt="" className="rotating absolute w-[80px] lg:w-[110px] inset-0 md:-left-10 lg:-left-[3.5rem] md:my-auto -top-10 mx-auto md:-top-0 md:mx-0" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="relative w-full">
        <div className='relative bg-[#060719] w-full overflow-hidden pt-2'>
          <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
          <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12' />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#fafafa] sm:-mt-[15rem] -mt-[6rem] z-50  flex flex-col items-center min-w-[20vw] max-w-[100vw] ">
          <div className="bg-[#fafafa]  z-50  flex flex-col items-center min-w-[20vw] max-w-[100vw]">
            <div className="flex flex-col px-5 top-[12rem] space-y-2 item-center justify-center">

              <div>
                <h1 className="text-primary-dark  text-center text-[20px] sm:text-3xl font-bold">Tech stack that serves you well today and when</h1> <h1 className="text-primary-dark text-center text-[20px] sm:text-3xl font-bold"> you grow 10x in the next 24 months.</h1>
              </div>
              <div className="pb-8 pt-3">
                <p className="text-[#575757] text-md text-center text-[12px] sm:text-[16px] font-semibold">Get an unbiased perspective on the best frameworks and tools for your project. With </p>
                <p className="text-[#575757] text-md text-center text-[12px] sm:text-[16px] font-semibold">70+ completed projects, we’ve seen enough to save you from trouble.</p>
              </div>
            </div>
            <Link to="/contact-us" className="pb-8"><button className="bg-[#060719] hover:cursor-pointer px-5 flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full hover:animate-pulse">
                <img src={wphone} alt="phone" className="w-5" />

                <p className="text-sm text-white">Get in Touch</p>
              </button></Link>
            <div className="flex bg-[#fafafa] flex-col gap-[1rem] md:gap-[1rem] lg:w-full w-[100vw] pb-[8rem]">
              <Marquee speed={50} className="marquee-container ">
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
              <Marquee speed={60} className="marquee-container ">
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

              <Marquee speed={55} className="marquee-container ">
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
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="bg-primary-dark  w-full">
              <div className='relative w-full top-[-90px] overflow-hidden pt-2 z-50'>
                    <img src={cbg} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
                </div>
            <div className="bg-primary-dark pb-[5rem] mt-[-12rem] md:mt-[-20rem] relative z-[111]  py-10 md:px-[7%]">
              <div className="flex flex-col space-y-3 px-6 md:px-0 items-center text-center mt-10">
                <h1 className="text-primary-green text-xl md:text-4xl font-bold">Tech leaders from leading companies have trusted Brainhub to build impactful software.</h1>
                <p className="text-primary-light text-[12px] sm:text-[17px]">Companies from fintech, healthcare, education, game dev, IoT and martech work with us <br /> to grow their business through great software.</p>
              </div>
              <div className="flex mt-[5rem] md:flex-row md:px-0 px-5 flex-col gap-10 md:gap-[4rem] items-center md:items-start justify-center md:justify-between md:mx-[7%]">
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
                <div className="flex flex-col text-center items-center">
                  <h1 className="text-primary-green text-3xl font-bold">Trusted by 15+ eCommerce Businesses</h1>
                </div>
                <div className="flex md:flex-row flex-col md:p-0 p-5 justify-between gap-[5rem]">
                  <div className="w-[13rem] lg:w-[15rem] md:w-[12em] h-[12rem] md:h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
                    <p className="text-[3rem] font-bold text-primary-green text-center">{call}+</p>
                    <p className="text-primary-light text-center">Onboarding Calls</p>
                  </div>
                  <div className="w-[13rem] lg:w-[15rem] md:w-[12em] h-[12rem] md:h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
                    <p className="text-[3rem] font-bold text-primary-green text-center">{client}%</p>
                    <p className="text-primary-light text-center">Client Satisfaction</p>
                  </div>
                  <div className="w-[13rem] lg:w-[15rem] md:w-[12em] h-[12rem] md:h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
                    <p className="text-[3rem] font-bold text-primary-green text-center">{customers}+</p>
                    <p className="text-primary-light text-center">Customers impacted</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* icons */}
        </motion.div>

      </div>
    </div>
  )
}