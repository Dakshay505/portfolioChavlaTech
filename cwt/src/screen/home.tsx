import "../index.css";
import phone_icon from "../assets/images/phone_icon.png";
import property from "../assets/images/Property 1=Frame 102.png";
import triangle from "../assets/images/triangle.png";
import square from "../assets/images/square.png";
import waveWhite from "../assets/images/Rectangle 3.png"
import blueWave from "../assets/images/Rectangle 1 (1).png"
import circle from "../assets/images/circle.png";
import analytics from "../assets/images/analytics.png";
import ai from "../assets/images/ai.png";
import bitbucker from "../assets/images/bitbucker.png";
import bootstrap from "../assets/images/bootstrap.png";
import aws from "../assets/images/aws.png";
import aws_ec2 from "../assets/images/aws-ec2.png";
import bootstrap4 from "../assets/images/bootstrap4.png";
import bootstrap5 from "../assets/images/bootstrap5.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import gitlab from "../assets/images/gitlab.png";
import id from "../assets/images/id.png";
import jamstack from "../assets/images/jamstack.png";
import js from "../assets/images/js.png";
import mongodb from "../assets/images/mongodb.png";
import nodejs from "../assets/images/nodejs.png";
import php from "../assets/images/php.png";
import python from "../assets/images/python.png";
import ps from "../assets/images/ps.png";
import reactjs from "../assets/images/reactjs.png";
import rust from "../assets/images/rust.png";
import saas from "../assets/images/sass.png";
import sveltejs from "../assets/images/sveltejs.png";
import vitejs from "../assets/images/vitejs.png";
import vs from "../assets/images/vs.png";
import xd from "../assets/images/xd.png";
import Iconpack from "../assets/images/Icon pack.png";
import Marquee from "react-fast-marquee";
import nextjs from "../assets/images/nextjs.png";

export default function homePage() {
  return (
    <div className="w-full">
      <div className="bg-primary-dark pb-[12rem] relative">
        <div className="flex md:flex-row flex-col-reverse justify-center items-center bg-primary-dark">
          <div className="flex flex-col w-[80%] md:w-[45%] px-5 gap-10">
            <div className="flex flex-col space-y-5">
              <h1 className="text-primary-green text-3xl md:text-5xl font-medium">
                Outpace the Competition with Cutting-Edge Tech
              </h1>
              <p className="md:text-md text-sm text-primary-light">
                Lorem ipsum dolor sit amet consectetur. Ac laoreet bibendum
                quisque orci sagittis vel. Etiam dolor in nec facilisis. Aliquet
                urna purus feugiat.
              </p>
              <button className="bg-[#8DE29E] flex items-center space-x-4 justify-center md:w-[258.38px] h-[50.7px] rounded-full">
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
            <img
              src={property}
              alt="image"
              className="rotating md-w-full w-[80%]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-primary-green w-[75%] h-[0.01em]"></div>
        </div>

        <div className="flex flex-col items-center justify-center mt-20 ">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-primary-green w-[80%] md:w-[50%] text-center md:text-3xl font-bold">
              Tap Into Your Potential with Our Comprehensive Service Suite
            </h1>
            <p className="text-primary-light md:text-md  w-[80%] text-center ">
              Our services are designed to empower your business, providing
              innovative solutions tailored to your unique needs. From
              cutting-edge technology to expert consultation, we've got you.
            </p>
          </div>
        </div>

        <div className="mt-[8rem] flex flex-col items-center pb-20 space-y-10">
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[70%] h-[8rem] rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-2xl md:text-4xl md:w-[40%]">
              Web Developement
            </h1>
            <p className="text-primary-light text-center mt-1 text-sm md:text-md font-semibold">
              Elevate User Experiences with our Unparalleled UI/UX Expertise
            </p>
            <div>
              <img
                src={triangle}
                alt=""
                className="md:w-[10%] absolute w-[20%] inset-0 md:left-[-3.5rem] md:top-3 top-[-3rem] left-[40%] right-[40%]"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[70%] h-[8rem] rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-2xl md:text-4xl md:w-[40%]">
              UI/UX Design
            </h1>
            <p className="text-primary-light text-center mt-1 text-sm md:text-md font-semibold">
              Elevate User Experiences with our Unparalleled UI/UX Expertise
            </p>
            <div>
              <img
                src={square}
                alt=""
                className="md:w-[10%] absolute w-[20%] inset-0 md:left-[-3.5rem] md:top-3 top-[-3rem] left-[40%] right-[40%]"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center relative md:gap-10 justify-center w-[70%] h-[8rem] rounded-3xl bg-opacity-10 bg-primary-light">
            <h1 className="text-primary-light font-medium text-2xl md:text-4xl md:w-[40%]">
              App Developement
            </h1>
            <p className="text-primary-light text-center mt-1 text-sm md:text-md font-semibold">
              Elevate User Experiences with our Unparalleled UI/UX Expertise
            </p>
            <div>
              <img
                src={circle}
                alt=""
                className="md:w-[10%] absolute w-[20%] inset-0 md:left-[-3.5rem] md:top-3 top-[-3rem] left-[40%] right-[40%]"
              />
            </div>
          </div>
        </div>
        <img src={waveWhite} alt="" className="absolute h-[15em] w-full " />
        <img src={blueWave} alt="" className="absolute bottom-28 md:bottom-40" />
      </div>
      
      <div className="h-[100vh] bg-white mt-[8rem]  flex flex-col items-center">
        <div className="flex flex-col space-y-3 item-center justify-center mb-10">
          <div className="z-10">
            <h1 className="text-primary-dark text-center text-3xl font-bold">
              Tech stack that serves you well today and when
            </h1>{" "}
            <h1 className="text-primary-dark text-center text-3xl font-bold">
              {" "}
              you grow 10x in the next 24 months.
            </h1>
          </div>
          <div>
            <p className="text-[#575757] text-md text-center font-semibold">
              Get an unbiased perspective on the best frameworks and tools for
              your project. With{" "}
            </p>
            <p className="text-[#575757] text-md text-center font-semibold">
              70+ completed projects, we’ve seen enough to save you from
              trouble.
            </p>
          </div>
        </div>
        {/* icons */}
        <div className="mt-20 flex flex-col gap-[3rem]">
          <Marquee>
            <div className="flex flex-row">
              <div className="">
                <img src={analytics} alt="analytics" className="w-[7rem] " />
              </div>
              <div className="">
                <img src={ai} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={bitbucker} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={bootstrap} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={aws} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={aws_ec2} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={bootstrap4} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={bootstrap5} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={git} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={github} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={gitlab} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={id} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={jamstack} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={xd} alt="analytics" className="w-[7rem]" />
              </div>
            </div>
          </Marquee>
          <Marquee delay={0.5}>
            <div className="flex flex-row">
              <div>
                <img src={js} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={mongodb} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={nodejs} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={php} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={python} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={ps} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={reactjs} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={rust} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={saas} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={sveltejs} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={vitejs} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={vs} alt="analytics" className="w-[7rem]" />
              </div>
              <div>
                <img src={nextjs} alt="analytics" className="w-[7rem]" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="bg-primary-dark pb-[5rem] py-10">
        <div className="flex flex-col space-y-3 items-center text-center mt-10">
          <h1 className="text-primary-green w-[55%] text-4xl font-bold">
            Tech leaders from leading companies have trusted Brainhub to build
            impactful software.
          </h1>
          <p className="text-primary-light w-[55%]">
            Companies from fintech, healthcare, education, game dev, IoT and
            martech work with us <br /> to grow their business through great
            software.
          </p>
        </div>
        <div className="flex mt-[5rem] md:flex-row md:px-0 px-5 flex-col gap-10 md:gap-[10rem] items-center justify-center">
          <div className="flex flex-col space-y-5 w-[15rem]">
            <img src={Iconpack} className="w-10" alt="Iconpack" />
            <p className="text-primary-light">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div>
              <p className="text-primary-green font-semibold text-xl">
                Lora Smith
              </p>
              <p className="text-primary-light">CEO & Founder Crix</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-[15rem]">
            <img src={Iconpack} className="w-10" alt="Iconpack" />
            <p className="text-primary-light">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div>
              <p className="text-primary-green font-semibold text-xl">
                Lora Smith
              </p>
              <p className="text-primary-light">CEO & Founder Crix</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 w-[15rem]">
            <img src={Iconpack} className="w-10" alt="Iconpack" />
            <p className="text-primary-light">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div>
              <p className="text-primary-green font-semibold text-xl">
                Lora Smith
              </p>
              <p className="text-primary-light">CEO & Founder Crix</p>
            </div>
          </div>
        </div>
        <div className="flex mt-[5rem] items-center justify-center">
          <div className="bg-primary-green w-[75%] h-[0.01em]"></div>
        </div>
        <div className="mt-[5rem] flex flex-col md:p-0 px-7 space-y-[5rem] items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-primary-green text-3xl font-bold">
              Trusted by 15+ eCommerce Businesses
            </h1>
          </div>
          <div className="flex md:flex-row flex-col md:p-0 p-5 justify-between gap-[5rem]">
            <div className="w-[10rem] lg:w-[15rem] md:w-[12em] h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
              <p className="text-[3rem] font-bold text-primary-green">20+</p>
              <p className="text-primary-light">Onboarding Calls</p>
            </div>
            <div className="w-[10rem] lg:w-[15rem] md:w-[12em] h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
              <p className="text-[3rem] font-bold text-primary-green">100%</p>
              <p className="text-primary-light">Client Satisfaction</p>
            </div>
            <div className="w-[10rem] lg:w-[15rem] md:w-[12em] h-[15rem] bg-opacity-25 bg-primary-light flex flex-col items-center rounded-3xl justify-center">
              <p className="text-[3rem] font-bold text-primary-green">1000+</p>
              <p className="text-primary-light">Customers impacted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
