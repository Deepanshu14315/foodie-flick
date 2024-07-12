import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import { useSelector } from "react-redux";

const FoodList = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  return (
    <>
      <div className="flex items-center justify-center lg:justify-start flex-wrap mx-6 gap-10 my-10 ">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((item, index) => {
          return <FoodCard key={index} AllFoods={item} />;
        })}
      </div>
    </>
  );
};

export default FoodList;
