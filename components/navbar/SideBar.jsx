"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const SideBar = () => {
  return (
    <React.Fragment>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ x: "-100%" }}
        className="w-full grid place-items-center h-screen bg-slate-900 "
      ></motion.div>
      <Button className="bg-slate-900">Button</Button>
    </React.Fragment>
  );
};

export default SideBar;
