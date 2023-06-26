import React from "react";
import phone2 from "../assets/images/phone2.png";

export default function ContactForm() {
  return (
    <>
      <section className="mt-16 bg-primary-dark">
        <div className="py-8 lg:py-16 px-4 ml-5 mr-auto max-w-screen-md">
          <h2 className="font-nexa text-4xl font-extrabold leading-16 tracking-wide text-left text-primary-green">
            Let’s Connect!
          </h2>
          <form action="#" className="space-y-8 mt-5">
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name*
              </label>
              <input
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
                type="text"
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
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-white bg-[#2C2C2C] rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>

            <button
              type="button"
              className="t_c-#FFFFFF bg-[#8DE29E] flex gap-2 items-center focus:ring-4 focus:ring-green-300 border border-green-500 font-medium rounded-full text-sm px-4 py-2 text-center"
            >
              <img src={phone2} className="h-5 w-5" alt="" />
              Let's get started
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
