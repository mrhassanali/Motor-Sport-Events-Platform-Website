import React from "react";
// import { getRemaningDateTime } from "../../utils/helpers";

interface timerProps {
  date?: string;
}
export default function Timer({ date }: timerProps) {
  return (
    <div className="grid base:grid-cols-4 md:gap-x-4 base:gap-x-2 text-white text-center mt-1">
      <div className="border border-slate-100 rounded-lg p-2 sm:p-1">
        <span className="font-semibold md:text-[1.3rem] text-md">24</span>
        <h4 className="md:text-md base:text-sm">Days</h4>
      </div>
      <div className="border border-slate-100 rounded-lg p-2">
        <span className="font-semibold md:text-[1.3rem] text-md">17</span>
        <h4 className="md:text-md base:text-sm">Hours</h4>
      </div>
      <div className="border border-slate-100 rounded-lg p-2">
        <span className="font-semibold md:text-[1.3rem] text-md">48</span>
        <h4 className="md:text-md base:text-sm">Minutes</h4>
      </div>
      <div className="border border-slate-100 rounded-lg p-2">
        <span className="font-semibold md:text-[1.3rem] text-md">50</span>
        <h4 className="md:text-md base:text-sm">Seconds</h4>
      </div>
    </div>
  );
}
