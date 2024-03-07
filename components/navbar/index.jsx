import React from "react";
import MobNav from "./MobNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import globals from "../global.module.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <main className="bg-black p-10 text-white font-bold flex items-center justify-between  w-full h-32  ">
        <div className="md:hidden ">
          <MobNav
            icon={<GiHamburgerMenu />}
            profileName="Side Bar 1"
            profileDesc="I am Sidebar 1"
          />
        </div>
        <h1 className={globals.heading}>I Am Navbar</h1>
        <h1 className={globals.heading}>I Am Navbar</h1>
        <h1 className={globals.heading}>I am avatar</h1>
      </main>
    </React.Fragment>
  );
};

export default Navbar;
