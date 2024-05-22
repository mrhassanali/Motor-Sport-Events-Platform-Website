import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto p-2 lg:w-11/12 md:px-8 base:w-full xs:px-10">
      {children}
    </div>
  );
}

export default Container;
