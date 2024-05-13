import React from "react";
import { Container } from "../../Atoms";
import { BoltIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import HeaderIcon from "../../assets/icons/header-icon.png";
import { ReactComponent as MoreVertIcon } from "../../assets/icons/more_vert_24dp.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <img
            src={HeaderIcon}
            alt="rims"
            className="w-[14rem] h-auto mix-blend-multiply"
          />
        </div>
        <div className="inline-flex items-center gap-x-2">
          <MoreVertIcon
            className="w-7 h-9 cursor-pointer xl:hidden lg:hidden md:hidden sm:block xs:block base:block"
            onClick={handleMobileMenu}
          />

          <ul className="xl:inline-flex lg:inline-flex md:inline-flex items-center gap-x-2 hidden  ">
            <li>
              <Link to={"/login"}>
                <button className="bg-gray-300 hover:bg-white text-gray-800 py-2 px-4 rounded-lg">
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/signup"}>
                <button className="bg-gray-700 hover:bg-gray-900 text-white  py-2 px-4 rounded-lg inline-flex gap-x-2">
                  <BoltIcon className="w-6 h-6" />
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>

          {isMobileMenuOpen && (
            <ul className="absolute top-12 rounded-lg right-7 z-50  inline-block space-y-4 bg-white p-3 lg:hidden md:hidden">
              <li>
                <Link to={"/login"}>
                  <button className="bg-gray-300 hover:bg-white text-gray-800 py-2 px-9 rounded-lg">
                    Sign In
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/signup"}>
                  <button className="bg-gray-700 hover:bg-gray-900 text-white  py-2 px-4 rounded-lg inline-flex gap-x-2">
                    <BoltIcon className="w-6 h-6" />
                    Sign Up
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
}
