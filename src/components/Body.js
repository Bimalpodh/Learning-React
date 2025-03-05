import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";

import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { withDiscountInfo } from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import shimmer from "./shimmer";
import UserContext from "../utils/userContext";


const Body = () => {
  // State variables
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Higher Order Restaurant call here
  const RestaurantCardWithDiscount = withDiscountInfo(RestaurantCard);

  // Fetch API Data
  useEffect(() => {
    ApiData();
  }, []);

  const ApiData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
    

      // Find the correct data structure
      const restaurantsData =
        json?.data?.cards.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // console.log("Fetched Restaurants:", restaurantsData);

      // Set both lists
      setListOfRestaurant(restaurantsData);
      setfilteredRestaurant(restaurantsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline !! 🛜Please check your internet🛜 </h1>;
  }

 const {LoggedInuser,setUserName}=useContext(UserContext)

  // Conditional Rendering
  return ListOfRestaurant?.length===0 ? (
    shimmer()
  ) : (

    <div className="body ">
      <div className="filter  flex m-3">
        <div className="search  flex items-center justify-center">
          <input
            type="text"
            className="search-box border border-solid border-black  rounded-lg p-3 w-64"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn m-1 bg-green-300 w-20 h-10 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className=" fiter-Top-rated  flex  mx-10 items-center justify-center">
          <button
            className="filter-btn   w-40 rounded-md h-10 bg-gray-300 "
            onClick={() => {
              const filteredList = ListOfRestaurant.filter(
                (res) => res?.info?.avgRating >= 4.4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
          <div className="  user-Name-input mx-4 p-2">
            <label className="text-green-600" >UserName</label>
            <input className="border-2 p-1 border-slate-500 mx-2" type="text" value={LoggedInuser} onChange={(e)=>setUserName(e.target.value)} ></input>
          </div>
        </div>
      </div>

      <div className="res-container flex flex-wrap mx-60 ">
        {filteredRestaurant.map((restaurant, index) => (
          
          <Link
            key={restaurant?.info?.id || index}
            to={"/restaurants/" + (restaurant?.info?.id || index)}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithDiscount resdata={restaurant.info ||{}} />
            ) : (
              <RestaurantCard resdata={restaurant.info} />
            ) 
              }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
