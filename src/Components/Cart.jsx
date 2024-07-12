import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setactiveCart] = useState(false);
  const CartItem = useSelector((state) => state.cart.cart);
  const totalItem = CartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalAmount = CartItem.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed top-0 right-0 bottom-0 h-full w-full lg:w-72 z-20  bg-white p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 overflow-hidden`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl text-gray-800 font-bold">My Order</span>
          <IoMdClose
            onClick={() => setactiveCart(!activeCart)}
            className="border-2 border-gray-600 text-xl p-1 rounded-md hover:text-red-500 hover:border-red-500"
          />
        </div>
        <div className="w-full absolute right-0 bottom-0 p-5  bg-white">
          <h2 className="font-bold">
            Items :
            <span className="text-green-500 font-bold"> {totalItem}</span>
          </h2>
          <h2 className="font-bold">
            Total Amount :
            <span className="text-green-500 font-bold">₹{totalAmount}</span>
          </h2>
          <hr className="border mb-2 mt-1" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 text-white px-3 py-2 w-full font-bold rounded-lg"
          >
            Checkout
          </button>
        </div>
        <div>
          {CartItem.length > 0 ? (
            CartItem.map((item, ind) => {
              return <CartItems food={item} key={ind} />;
            })
          ) : (
            <h2 className=" mt-2 text-gray-800 text-center text-xl font-bold">
              Your cart is empty
            </h2>
          )}
        </div>
      </div>
      <div
        className={`bg-white shadow-lg p-3 z-0  rounded-full fixed bottom-5 right-5 
            ${totalItem > 0 && "animate-bounce delay-500 transition-all"}`}
      >
        <h2 className="fixed bottom-8 z-10 right-3 text-sm font-bold bg-green-400 px-1.5  rounded-md text-white">
          {totalItem > 0 ? totalItem : ""}
        </h2>
        <FaShoppingCart
          onClick={() => setactiveCart(!activeCart)}
          className="text-2xl"
        />
      </div>
    </>
  );
};

export default Cart;
