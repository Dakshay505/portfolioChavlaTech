import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import cbg from "../assets/images/blackbg curve.png"


import greenCurve from '../assets/images/green-curve.png'
export const Counting = () => {
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
    <div> <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="bg-primary-dark  w-full">
      <div className="bg-primary-dark pb-[5rem] mt-[-12rem] md:mt-[-20rem] relative z-[111]  py-10 ">
        <div className='relative w-full top-[-110px] overflow-hidden pt-2'>
          <img src={cbg} alt="" className='h-40 md:h-80 lg:h-96' />
          <img src={greenCurve} alt="" className='absolute bottom-32 md:-top-8 lg:-top-12 z-1' />
        </div>

        <div className="mt-[-150px] relative z-[1] flex flex-col md:p-0 px-7 space-y-[5rem] items-center">
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
    </motion.div></div>
  )
}
