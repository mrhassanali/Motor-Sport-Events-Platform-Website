import React from "react";
import { Container } from "../../Atoms";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import Timer from "../Timer";

export default function Hero() {
  let date = new Date();
  return (
    <div className="absolute bottom-0 backdrop-blur-[3.5rem] w-full">
      <Container>
        <div className="flex justify-between items-center flex-wrap flex-row md:flex-row sm:flex-col xs:flex-col base-flex-col gap-y-3">
          <div className="w-8/1 p-2 md:w-8/12 sm:w-full xs:w-full base:w-full md:pr-12 md:pb-11">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-white md:text-3xl sm:text-[1.2rem] xs:text-[1.2rem] base:text-[1.2rem]">
                Historical Festival 42
              </h1>
              <button className="border border-slate-400 hover:bg-[#d31f22] text-white px-2 items-center rounded-lg inline-flex gap-x-2 lg:text-md md:text-md sm:text-md base:text-md">
                ON SALE <BanknotesIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-5  gap-2 md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-2 base:grid-cols-2 mt-2 gap-x-2">
              <div className="border-r-[1px] border-slate-200 md:border-r-[1px] sm:border-r-0 xs:border-r-0 base:border-r-0  lg:col-span-2 md:col-span-2 text-white">
                <label
                  htmlFor="date"
                  className="font-semibold text-lg md:text-lg sm:text-sm xs:text-sm base:text-sm"
                >
                  Date
                </label>
                <p className="text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm base:text-sm">
                  AUG 30 - SEP 02/ 2024
                </p>
              </div>
              <div className="border-r-[1px] border-slate-200 md:border-r-[1px] sm:border-r-0 xs:border-r-0 base:border-r-0 text-white">
                <label
                  htmlFor="priceFrom"
                  className="font-semibold text-lg md:text-lg sm:text-sm xs:text-sm base:text-sm"
                >
                  Price From
                </label>
                <p className="text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm base:text-sm">
                  $240,00
                </p>
              </div>
              <div className="border-r-[1px] border-slate-200 md:border-r-[1px] sm:border-r-0 xs:border-r-0 base:border-r-0 text-white">
                <label
                  htmlFor="place"
                  className="font-semibold text-lg md:text-lg sm:text-sm xs:text-sm base:text-sm"
                >
                  Place
                </label>
                <p className="text-lg lg:text-lg md:text-md sm:text-sm xs:text-sm base:text-sm">
                  Lime Rock Park
                </p>
              </div>
              <div className=" text-white">
                <label
                  htmlFor="address"
                  className="font-semibold text-lg md:text-lg sm:text-sm xs:text-sm base:text-sm"
                >
                  Address
                </label>
                <p className="text-lg lg:text-lg md:text-md sm:text-sm xs:text-sm base:text-sm">
                  Lakeville, CT
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12  md:w-4/12 sm:w-full xs:w-full base:w-full p-2 hidden lg:block 2xl:block md:block xmd:hidden">
            <p className="text-slate-200 justify-center text-lg md:text-lg sm:text-md xs:text-md base:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              laboriosam voluptatem inventore tenetur iste dignissimos. <br />
              <span>
                <Link
                  to="#"
                  className="inline-flex items-center gap-x-2 font-bold"
                >
                  More Info <ArrowUpRightIcon className="w-4 h-4 font-bold" />
                </Link>
              </span>
            </p>
            <button className="w-full capitalize bg-[#d31f22] hover:bg-red-900 mt-3 text-white p-2 rounded-lg gap-x-2 text-center">
              Buy Ticket Now
            </button>
          </div>
        </div>
        <div className="lg:hidden md:hidden">
          <Timer />
        </div>
      </Container>
    </div>
  );
}
