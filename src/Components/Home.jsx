import React from "react";
import Navbar from "./Navbar";
import FoodList from "./FoodList";
import CategoryMenu from "./CategoryMenu";
import Cart from "./Cart";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodList />
      <Cart />
      <Footer />
    </div>
  );
};

export default Home;
