import React from "react";
import { getRemaningDateTime } from "../../utils/helpers";

interface timerProps {
  date?: string;
}
export default function Timer({ date }: timerProps) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-x-4 md:gap-x-4 sm:gap-x-1 text-white text-center mt-1">
      <div className="border border-slate-300 rounded-lg p-2 sm:p-1">
        <span className="font-semibold md:text-[1.3rem] text-md">24</span>
        <h4 className="text-md sm:text-sm xs:text-sm base:text-sm">Days</h4>
      </div>
      <div className="border border-slate-300 rounded-lg p-2">
        <span className="font-semibold md:text-[1.3rem] text-md">17</span>
        <h4 className="text-md sm:text-sm xs:text-sm base:text-sm">Hours</h4>
      </div>
      <div className="border border-slate-300 rounded-lg p-2">
        <span className="font-semibold md:text-[1.3rem] text-md">48</span>
        <h4 className="text-md sm:text-sm xs:text-sm base:text-sm">Minutes</h4>
      </div>
      <div className="border border-slate-300 rounded-lg p-2">
        <span className="font-semibold md:text-[1.3rem] text-md">56</span>
        <h4 className="text-md sm:text-sm xs:text-sm base:text-sm">Seconds</h4>
      </div>
    </div>
  );
}
