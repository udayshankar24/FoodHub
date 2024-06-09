import React from "react";
import { IMG_URL } from "../utils/const.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const Items = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (i) => {
    dispatch(addItem(i));
  };

  return (
    <div className="m-4 p-4 text-center relative">
      {items.map((i, index) => (
        <div key={index} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2">
              <span> {i?.card?.info?.name}</span>
              <span> - ₹ {i?.card?.info?.price ? i?.card?.info?.price / 100 : i?.card?.info?.defaultPrice / 100}</span>
              <p className="text-lg">{i?.card?.info?.description}</p>
            </div>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="mx-16 p-2 absolute shadow-lg bg-black text-white rounded-md" onClick={() => handleAddItem(i)}>
                Add+
              </button>
            </div>
            <img src={IMG_URL + i?.card?.info?.imageId} className="w-full"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
