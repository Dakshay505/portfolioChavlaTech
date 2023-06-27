
import phone from "../assets/images/PhoneCallw.png";

const ReadyCall = () => {
  return (
    <div className="flex flex-col items-center my-16 gap-[25px] justify-center h-[165px]">
        <div>
          <h1 className="font-nexa text-[30px] md:text-5xl font-extrabold leading-20 tracking-normal text-center text-primary-dark">
            Ready to get Started?
          </h1>
        </div>
        <div>
          <button
            type="button"
            className=" bg-primary-dark flex mt-3 gap-2 items-center focus:ring-4 focus:ring-green-300 border  font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            <img src={phone} className="h-5 w-5" alt="" />
            <span className="font-inter text-[12px] md:text-base md:font-medium leading-7 tracking-tight text-white text-center">
              Let’s get on a call
            </span>
          </button>
        </div>
      </div>
  )
}

export default ReadyCall