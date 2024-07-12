import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      {loading ? (
        <PropagateLoader color="#22C55E" />
      ) : (
        <div className="text-center">
          <h2 className="font-semibold mb-4 text-xl lg:text-3xl">
            Order Succesful !
          </h2>
          <p className="text-sm lg:text-lg">
            Your order has been succesfully placed.
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
