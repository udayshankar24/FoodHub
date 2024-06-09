import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
//import { MENU_URL } from "../utils/const.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaruntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resinfo = useRestaurantMenu(resid);
  const [showIndex, setshowIndex] = useState();

  if (resinfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resinfo?.cards[2]?.card?.card?.info;

  const itemCategory = resinfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      <div className="text-center m-4 p-4">
        <h1 className="text-2xl">{name}</h1>
        <h5>{cuisines.join(" , ")}</h5>
        <h5>{costForTwoMessage}</h5>
      </div>

      <div>
        <ul>
          {itemCategory.map((item, index) => (
            <RestrauntCategory key={index} category={item?.card?.card} showItems={index == showIndex ? true : false} setshowIndex={() => setshowIndex(index)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
