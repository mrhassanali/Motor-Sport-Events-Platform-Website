import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
function Container({ children }: ContainerProps) {
  return (
    <div className="w-11/12 mx-auto p-2 lg:w-11/12 md:w-full md:px-8 sm:w-full xs:w-full base:w-full">
      {children}
    </div>
  );
}

export default Container;
