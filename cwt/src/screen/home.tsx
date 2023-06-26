import phone_icon from "../assets/images/phone_icon.png"
import property from "../assets/images/Property 1=Frame 102.png"
export default function homePage() {
  return (
    <>
      <div className="w-full  flex md:flex-row items-center gap-[5rem] bg-primary-dark">
        <div className="flex flex-col w-[55%]">
          <div className="flex flex-col md:space-y-5">
          <h1 className="text-primary-green text-5xl font-medium">Outpace the Competition with Cutting-Edge Tech</h1>
          <p className="text-md w-[85%] text-primary-light">Lorem ipsum dolor sit amet consectetur. Ac laoreet bibendum quisque orci sagittis vel. Etiam dolor in nec facilisis. Aliquet urna purus feugiat.</p>
          <button className="bg-[#8DE29E] flex items-center space-x-4 justify-center w-[258.38px] h-[50.7px] rounded-full">
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
          <img src={property} alt="" />
        </div>
      </div>
    </>
  )
}
