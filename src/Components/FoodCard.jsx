import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const FoodCard = ({ AllFoods }) => {
  const { name, price, id, description, img, rating } = AllFoods;
  const dispatch = useDispatch();
  const handleToast = (name) => toast.success(`added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-64 bg-white p-5 rounded-xl shadow-xl">
        <div className="h-36 w-full">
          <img
            className="h-full w-full object-fill hover:scale-110 transition-all duration-500 ease-in-out"
            src={img}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <h2 className="font-semibold">{name}</h2>
          <h4 className="text-green-500 font-semibold mt-3">₹{price}</h4>
        </div>
        <p className="text-sm">{description.slice(0, 50)}...</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold flex justify-center items-center gap-1">
            <FaStar className="text-yellow-400" />
            {rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, img, rating, price, qty: 1 }));
              handleToast(name);
            }}
            className="bg-green-500 text-white text-sm font-bold rounded-lg px-2 py-1"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
