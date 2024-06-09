import Items from "./Items";
import { useState } from "react";
const RestrauntCategory = (props) => {
  const item = props;

  const handleClick = () => {
    props.setshowIndex();
  };
  console.log(item?.category?.itemCards);
  return (
    <div className="text-center mx-auto my-4 p-3 w-6/12 border-b-2 border-black-200 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {props.category.title} ({props?.category?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {props.showItems && <Items items={item?.category?.itemCards} />}
    </div>
  );
};
export default RestrauntCategory;
