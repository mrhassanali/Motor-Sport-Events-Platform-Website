import React from "react";

type cardProps = {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  price: number;
  availableTicket: number;
};
export default function Card({ data }: { data: cardProps }) {
  return (
    <div className="border border-slate-300 rounded-lg relative">
      <div className="absolute left-2 rounded-full top-2 z-50 backdrop-blur-[4rem] px-1 text-white">
        <label htmlFor="map">Select for Map</label>
      </div>

      <div className="relative">
        <div className="absolute right-2 rounded-full -bottom-3 bg-white backdrop-blur-lg px-3 font-bold text-[#db1316] shadow-lg p-2">
          <label htmlFor="map">${data.price}</label>
        </div>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-32 object-cover bg-center mx-auto"
          loading="lazy"
        />
      </div>
      <div className="text-black p-2">
        <h3 className="text-lg font-bold">{data.title}</h3>
        <p className="mt-2 text-slate-800">
          {data.description?.slice(0, 85) + "..."}
        </p>
        <div className="mt-2 flex flex-wrap justify-between items-end">
          <button className="border border-slate-300 w-1/4 rounded-full text-center text-3xl md:text-2xl base-text-md">
            -
          </button>
          <div className=" w-1/4 text-[#db1316] font-bold text-center text-2xl">
            0
          </div>
          <button className="border border-slate-300 w-1/4 rounded-full text-center text-3xl md:text-2xl base:text-md">
            +
          </button>
        </div>

        <button className="mt-4 w-full bg-[#1d1e20] hover:bg-gray-900 text-white p-2 rounded-lg">
          Buy Ticket
        </button>
      </div>
    </div>
    // </div>
  );
}
