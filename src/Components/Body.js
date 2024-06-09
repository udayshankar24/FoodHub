import ResCard, { withRestrauntCard } from "./ResCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext.js";

const Body = () => {
  const [listofrestraunts, setlistofrestraunts] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [newrestraunts, setnewrestraunts] = useState([]);
  const OpenRestraunt = withRestrauntCard(ResCard);
  //const { login, setuserName } = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );*/
        const response = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();

        setlistofrestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setnewrestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //console.log(listofrestraunts);
  //conditional rendering
  if (listofrestraunts.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex justify-center items-center">
        <div className="m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <div className="m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-green-100 rounded-lg"
              onClick={() => {
                const newlist = listofrestraunts.filter((element) => element.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setnewrestraunts(newlist);
              }}
            >
              Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() => {
                const filteredlist = listofrestraunts.filter((res) => res.info.avgRating >= 4.0);
                setnewrestraunts(filteredlist);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
      </div>

      <div className="res-container w-full max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newrestraunts.map((restaurant) => (
            <Link to={"/restraunt/" + restaurant.info.id} key={restaurant.info.id} style={{ textDecoration: "none" }}>
              {restaurant.info.isOpen ? <OpenRestraunt resData={restaurant} /> : <ResCard resData={restaurant} />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
