"use client";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [show, setShow] = React.useState(true);
  return (
    <React.Fragment>
      <main className="bg-blue-50 w-full h-screen  grid place-items-center   ">
        {show ? (
          <Login show={show} setShow={setShow} />
        ) : (
          <SignUp show={show} setShow={setShow} />
        )}
      </main>
    </React.Fragment>
  );
};

export default Auth;
