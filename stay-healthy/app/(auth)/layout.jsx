import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen h-fit  flex items-center justify-center bg-[#e0e0e0]">
      <div className="bg-white w-full md:w-[70%] h-full md:h-fit rounded-lg lg:w-[40%] px-4 sm:px-10 py-10 lg:px-[4rem] flex flex-col gap-y-6 justify-center items-center">
        {/* Logo */}
        <Image src={"/logo.svg"} alt="Logo" width={200} height={200} />

        {/* Form */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
