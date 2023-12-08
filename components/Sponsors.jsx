import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Sponsors = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-22">
      <div className="flex flex-col text-center">
        <div className="text-3xl md:text-5xl font-bold text-rose-800">
          OUR SPONSERS
        </div>
        <div className="text-gray-500 pt-3 tracking-widest">
          People who have helped us through our journey.
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <Image
            src={
              "https://mms.businesswire.com/media/20210414005467/en/871272/23/horz-full-color.jpg"
            }
            alt="InterLedger Foundation"
            width={500}
            height={500}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src={
              "https://res.cloudinary.com/dkgwk8ey5/image/upload/v1699637800/NS_dvg3st.png"
            }
            alt="Newton School"
            width={500}
            height={500}
          />
        </div>
      </div>

      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-10">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Want to become a sponsor?
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Sponsers get access to customized workshops, extra perks,
              promotion on our social media handle and much more along with{" "}
              <i>your organization on the front page! </i> :){" "}
            </p>
          </div>
        </div>

        <div className=" mx-auto">
          <button className=" flex group mt-4 gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto hover:scale-105 hover:shadow-lg">
            <span className="text-sm font-medium"> Get in Touch </span>

            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
