import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IdentificationIcon,
  HomeModernIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { ReactComponent as ParkingSVG } from "../../assets/icons/parking.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { switchTab } from "../../store/slices/Tabs/tabSlice";

export default function Tabs() {
  const tabs = useAppSelector((state) => state.tabs);
  const dispatch = useAppDispatch();
  const [tabsName, setTabsName] = useState([
    {
      id: 1,
      icon: <IdentificationIcon className="w-6 h-6" />,
      name: "General Admission",
      link: "#",
      count: 6,
      current: true,
    },
    {
      id: 2,
      icon: <HomeModernIcon className="w-6 h-6" />,
      name: "Camping",
      link: "#",
      count: null,
      current: false,
    },
    {
      id: 3,
      icon: <HeartIcon className="w-6 h-6 text-[#ff3830]" />,
      name: "Hospitality",
      link: "#",
      count: null,
      current: false,
    },
    {
      id: 4,
      icon: <ParkingSVG className="w-6 h-6" />,
      name: "Parking",
      link: "#",
      count: null,
      current: false,
    },
  ]);

  const handleSwitchTab = (e: any) => {
    const updatedTabs = tabsName.map((tab) => {
      if (tab.id === e.id) {
        return { ...tab, current: true };
      } else {
        return { ...tab, current: false };
      }
    });

    setTabsName(updatedTabs);
    dispatch(switchTab(e));
  };

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 hidden lg:block">
        <ul className=" flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabsName.map((item, index) => {
            return (
              <li
                className="w-1/4"
                key={index + 1}
                onClick={() =>
                  handleSwitchTab({
                    id: item.id,
                    name: item.name,
                    link: item.link,
                    count: item.count,
                  })
                }
              >
                <Link
                  to={item.link}
                  className={
                    item.current
                      ? "inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-red-600 border-red-500 dark:hover:text-gray-300 group gap-x-1 text-[#d31f22]"
                      : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group gap-x-1"
                  }
                >
                  <div>{item.icon && item.icon}</div>
                  {item.name.toUpperCase()}
                  <div
                    className={
                      item.current
                        ? `ml-2 border border-red-500 md:text-md sm:text-sm base:text-sm rounded-full px-1`
                        : `"ml-2 border border-slate-600 md:text-md sm:text-sm base:text-sm rounded-full px-1`
                    }
                  >
                    0{item.count}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
