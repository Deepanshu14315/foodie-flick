import React from "react";
import { FiMinus } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../Redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItems = ({ food }) => {
  const dispatch = useDispatch();
  const { name, img, price, id, qty } = food;
  return (
    <div className="flex w-full p-2 mt-4 shadow-md rounded-lg overflow-hidden justify-between">
      <div className="h-12 w-14">
        <img className="h-full w-full" src={img} alt="" />
      </div>
      <div>
        <div className="flex items-center justify-center">
          <span className="font-bold text-gray-800 w-36 leading-none">
            {name}
          </span>
          <MdDelete
            onClick={() => {
              dispatch(removeFromCart(food));
              toast.error(`${name} removed`);
            }}
            className="text-gray-600  text-xl  cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-green-500 font-bold"> ₹{price}</span>
          <div className="flex items-center justify-around gap-2">
            <FiMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border border-gray-900 rounded-md font-bold text-xl hover:bg-green-500 hover:text-white transition-all ease-linear cursor-pointer hover:border-none p-1"
            />
            <span className="text-green-500 font-bold">{qty}</span>
            <IoAddOutline
              onClick={() => dispatch(incrementQty({ id }))}
              className="border border-gray-900 rounded-md text-xl font-bold  hover:bg-green-500 hover:text-white transition-all ease-linear cursor-pointer hover:border-none p-1 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
