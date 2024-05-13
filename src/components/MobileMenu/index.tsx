import React, { useState } from "react";
import {
  IdentificationIcon,
  HomeModernIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { ReactComponent as ParkingSVG } from "../../assets/icons/parking.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { switchTab } from "../../store/slices/Tabs/tabSlice";

export default function MobileMenu() {
  const tabs = useAppSelector((state) => state.tabs);
  const dispatch = useAppDispatch();
  const [mobileMenu, setMobileMenu] = useState([
    {
      id: 1,
      icon: <IdentificationIcon className="w-6 h-6" />,
      name: "General",
      link: "#",
      count: 6,
      current: true,
    },
    {
      id: 2,
      icon: <HomeModernIcon className="w-6 h-6" />,
      name: "Camping",
      link: "#",
      count: 6,
      current: false,
    },
    {
      id: 3,
      icon: <HeartIcon className="w-6 h-6 text-[#ff3830]" />,
      name: "Hospitality",
      link: "#",
      count: 8,
      current: false,
    },
    {
      id: 4,
      icon: <ParkingSVG className="w-6 h-6" />,
      name: "Parking",
      link: "#",
      count: 9,
      current: false,
    },
  ]);

  const handleSwitchTab = (e: any) => {
    const updatedTabs = mobileMenu.map((mb) => {
      if (mb.id === e.id) {
        return { ...mb, current: true };
      } else {
        return { ...mb, current: false };
      }
    });

    setMobileMenu(updatedTabs);
    dispatch(switchTab(e));
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {mobileMenu.map((item, index) => {
          return (
            <button
              key={index + 1}
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              onClick={() => handleSwitchTab(item)}
            >
              {item.icon && item.icon}
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
