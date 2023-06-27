import phone2 from "../assets/images/phone2.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import curveBackground from '../assets/images/curve-background.png'
import greenCurve from '../assets/images/green-curve.png'
import { useForm } from "react-hook-form";
import axios from "axios";

type Inputs = {
  name: string,
  email:string,
  phone: number,
  aboutProject: string
}

export default function ContactForm() {

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const sendData = async (data: Inputs) => {
    await axios.post(`http://localhost:5050/api/v1/contact`,data)
  }

  return (
    <>
    <Navbar />
      <section className="pt-[8rem] md:pt-16 bg-primary-dark">
        <div className="py-8 lg:py-16 ml-5 mr-auto max-w-screen-md md:px-[7%]">
          <h2 className="font-nexa text-4xl font-extrabold leading-16 tracking-wide text-left text-primary-green">
            Let’s Connect!
          </h2>
          <form
          onSubmit={handleSubmit((data: Inputs) => {
            console.log(data);
            sendData(data);
            reset();
          })}
          action="#" className="space-y-8 mt-5">
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name*
              </label>
              <input
              {...register('name', {
                required: 'name is required'
              })}
                type="text"
                id="name"
                className="block p-3 w-full sm:w-[584px] h-[56px] text-sm text-white bg-[#2C2C2C] rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email*
              </label>
              <input
              {...register('email', {
                required: 'email is required'
              })}
                type="email"
                id="email"
                className="shadow-sm bg-[#2C2C2C] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full sm:w-[584px] h-[56px] p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Phone*
              </label>
              <input
              {...register('phone', {
                required: 'phone is required'
              })}
                type="number"
                id="subject"
                className="block p-3 w-full sm:w-[584px] h-[56px] text-sm text-white bg-[#2C2C2C] rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                About my Project
              </label>
              <textarea
              {...register('aboutProject', {
                required: 'aboutProject is required'
              })}
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-white bg-[#2C2C2C] rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" bg-primary-green flex gap-2 items-center focus:ring-4 focus:ring-green-300 border border-green-500 font-medium rounded-full text-sm px-[23px] py-[16px] text-center"
            >
              <img src={phone2} className="h-5 w-5" alt="" />
              Let's get started
            </button>
          </form>
        </div>
          <div className='relative w-full overflow-hidden'>
                    <img src={curveBackground} alt="" className='h-40 md:h-80 lg:h-96' />
                    <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-10 z-50' />
                </div>
      </section>
      <Footer />
    </>
  );
}
