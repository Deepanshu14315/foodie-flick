import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-gary-100">
      <h1 className="font-semobold text-6xl lg:text-8xl mb-6">404</h1>
      <h2 className="font-semibold text-3xl mb-4">Oh No!</h2>
      <p className="mb-14 font-semibold font-xl">Something went wrong!</p>
    </div>
  );
};

export default Error;
