
import phone from "../assets/images/PhoneCallw.png";
import { Link } from "react-router-dom";
import curveBackground from '../assets/images/curve-background.png'
import greenCurve from '../assets/images/green-curve.png'
const ReadyCall = () => {
  return (
    <div className="relative w-full">
      <div className='relative bg-[#060719] w-full overflow-hidden pt-2'>
          <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
          <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12' />
        </div>
      <div className="flex flex-col items-center mt-[-6rem] relative md:mt-[-15rem] my-16 gap-[25px] justify-center h-[165px]">
        <div>
          <h1 className="font-nexa text-[30px] md:text-5xl font-extrabold leading-20 tracking-normal text-center text-primary-dark">
            Ready to get Started?
          </h1>
        </div>
        <div>
        <Link to="/contact-us">
          <button
            type="button"
            className=" bg-primary-dark flex px-[32px] py-[14px] mt-3 gap-2 items-center focus:ring-4 focus:ring-green-300 border  font-medium rounded-full text-sm text-center"
          >
            <img src={phone} className="h-5 w-5" alt="" />
            <span className="font-inter text-[12px] md:text-base md:font-medium leading-7 tracking-tight text-white text-center">
              Get in touch
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default ReadyCall