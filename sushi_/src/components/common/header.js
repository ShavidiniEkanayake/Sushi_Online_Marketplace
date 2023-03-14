import React from "react";
import { useState, useContext } from "react";

const Header = () => {
  return (
    <div>
      <div
        className={`w-full flex flex-col md:flex-row justify-between items-center bg-black p-5 py-5 fixed top-0 z-50 backdrop-blur-[5px] border-b border-white/10`}
      >
        <div className="md:w-5/12 pl-2 md:pl-12">
          {/* <img src="/assets/logo.png" className="w-8 h-8" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;