import phone2 from "../assets/images/phone2.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import curveBackground from "../assets/images/curve-background.png";
import greenCurve from "../assets/images/green-curve.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import {motion} from 'framer-motion'

// type Inputs = {
//   name: string;
//   email: string;
//   phone: number;
//   aboutProject: string;
// };

export default function ContactForm() {
  // const { register, handleSubmit, reset } = useForm<Inputs>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const api = "https://www.chawlatechnologies.com";
  const onSubmit = async (data: any): Promise<void> => {
    console.log(data);
    await axios.post(`${api}/api/v1/contact`, data);
    // const mail = await axios.post(
    //   "https://formsubmit.co/59e31d6d2c4cee102841a6d0a2e78c90",
    //   data
    // );
    // console.log(mail);
    reset();
  };

  return (
    <>
      <Navbar />
      <section className="pt-[8rem] md:pt-16 bg-primary-dark">
        <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className="py-8 lg:py-16 max-w-screen-md px-[7%]">
          <h2 className="font-nexa text-4xl font-extrabold leading-16 tracking-wide text-left text-primary-green">
            Let’s Connect!
          </h2>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            action="https://formsubmit.co/59e31d6d2c4cee102841a6d0a2e78c90"
            method="POST"
            className="space-y-8 mt-5"
          >
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name*
              </label>
              <input
                {...register("name", {
                  required: true,
                  maxLength: 100,})}
                type="text"
                id="name"
                className="block p-3 w-full sm:w-[584px] h-[56px] text-sm text-white bg-[#FFFFFF1A]  rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email*
              </label>
              <input
                {...register("email",  {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                type="email"
                id="email"
                className="shadow-sm  bg-[#FFFFFF1A]  text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full sm:w-[584px] h-[56px] p-2.5"
                required
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Phone*
              </label>
              <input
                {...register("phone", {
                  required: "phone is required",
                  minLength:9,
                  maxLength:10
                })}
                type="number"
                id="subject"
                className="block p-3 w-full sm:w-[584px] h-[56px] text-sm text-white  bg-[#FFFFFF1A]  rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
              {errors.phone && (
                <p className="mt-1 text-primary-500">
                  {errors?.message?.type === "required" &&
                    "This field is required."}
                  {errors?.message?.type === "maxLength" &&
                    "Max length is 10 digit."}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                About my Project
              </label>
              <textarea
                {...register("aboutProject", {
                  required: true,
                  maxLength: 2000,
                })}
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-white  bg-[#FFFFFF1A]  rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="  bg-primary-green flex gap-2 items-center focus:ring-4 focus:ring-green-300 border border-green-500 font-medium rounded-full text-sm px-[23px] py-[16px] text-center"
            >
              <img src={phone2} className="h-5 w-5" alt="" />
              Let's get started
            </button>
          </form>
        </motion.div>
        <div className="relative w-full overflow-hidden pt-2">
          <img src={curveBackground} alt="" className="h-40 md:h-80 lg:h-96" />
          <img
            src={greenCurve}
            alt=""
            className="absolute bottom-32 md:-top-8 lg:-top-10 z-50"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
