import React from "react";
import { Container } from "../../Atoms";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import Timer from "../Timer";

export default function Hero() {
  return (
    <div className="absolute bottom-0 backdrop-blur-[3.5rem] w-full">
      <Container>
        <div className="flex justify-between items-center flex-wrap md:flex-row base-flex-col gap-y-3">
          <div className="p-2 md:w-8/12 base:w-full md:pr-12 md:pb-11 text-white">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-bold md:text-3xl base:text-[1.2rem]">
                Historical Festival 42
              </h1>
              <button className="border border-slate-400 hover:bg-[#d31f22] px-2 items-center rounded-lg inline-flex gap-x-2 lg:text-md md:text-md sm:text-md base:text-md">
                ON SALE <BanknotesIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-5 gap-2 base:grid-cols-2 mt-2 gap-x-2">
              <div className="md:border-r  lg:col-span-2 md:col-span-2">
                <label
                  htmlFor="date"
                  className="font-semibold md:text-lg base:text-sm"
                >
                  Date
                </label>
                <p className="lg:text-lg md:text-lg base:text-sm">
                  AUG 30 - SEP 02/ 2024
                </p>
              </div>
              <div className="md:border-r">
                <label
                  htmlFor="priceFrom"
                  className="font-semibold md:text-lg base:text-sm"
                >
                  Price From
                </label>
                <p className="text-lg lg:text-lg md:text-lg base:text-sm">
                  $240,00
                </p>
              </div>
              <div className="md:border-r">
                <label
                  htmlFor="place"
                  className="font-semibold md:text-lg base:text-sm"
                >
                  Place
                </label>
                <p className="lg:text-lg md:text-md base:text-sm">
                  Lime Rock Park
                </p>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="font-semibold md:text-lg base:text-sm"
                >
                  Address
                </label>
                <p className="lg:text-lg md:text-md base:text-sm">
                  Lakeville, CT
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 base:w-full p-2 hidden md:block xmd:hidden">
            <p className="text-slate-200 justify-center text-lg md:text-lg base:text-md">
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
        <div className="md:hidden">
          <Timer />
        </div>
      </Container>
    </div>
  );
}
