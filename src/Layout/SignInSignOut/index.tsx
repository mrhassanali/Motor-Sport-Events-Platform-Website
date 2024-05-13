import React from "react";
import CarRacingImage from "../../assets/images/car-racing.jpeg";
import { Carousel } from "../../components";
import CarouselData from "../../data/SignInSignUp.json";

type SignInSignoutProps = {
  children?: React.ReactNode;
};

export default function SignInSignout({ children }: SignInSignoutProps) {
  return (
    <div
      className="backdrop-blur-lg w-full h-[100vh] bg-slate-200 flex justify-center items-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${CarRacingImage})` }}
    >
      <div className="rounded-lg bg-white text-black w-3/4 mx-auto md:w-4/5 sm:w-11/12 xs:w-11/12 base:w-11/2">
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 base:grid-cols-1">
          {/* border border-slate-500  */}
          <div className="p-6 w-9/12 lg:w-9/12 md:w-full sm:w-8/12 xs:w-full base:w-full mx-auto">
            {children}
          </div>
          {/* border border-slate-500 */}
          <div className=" hidden lg:block md:block">
            <Carousel>
              {CarouselData.map((item, index) => (
                <div key={index} className="slick_slide_custome">
                  <img src={item.image} alt={item.alt} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
