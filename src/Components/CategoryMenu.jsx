import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const categoryLists = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];

    setCategories(uniqueCategories);
  };

  useEffect(() => {
    categoryLists();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h1 className="font-semibold text-xl mb-4">Find the best food</h1>
      <div className="my-5 flex gap-3 scrollbar-hide overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-500 ease-in-out ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`py-2 px-3 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-500 ease-in-out ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
