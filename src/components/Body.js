import { useState, useEffect } from "react";
import { Link } from "react-router";


import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import shimmer from "./shimmer";

const Body = () => {
  // State variables
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch API Data
  useEffect(() => {
    ApiData();
  }, []);

  const ApiData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      console.log(json);

      // Find the correct data structure
      const restaurantsData = json?.data?.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      console.log("Fetched Restaurants:", restaurantsData);

      // Set both lists
      setListOfRestaurant(restaurantsData);
      setfilteredRestaurant(restaurantsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Conditional Rendering
  return ListOfRestaurant.length === 0 ? 
    shimmer()
   : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = ListOfRestaurant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredList);
            }
            }>Search 
          </button>   
                
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurant.filter(
              (res) => res?.info?.avgRating >= 4.4
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
            <Link to={"restaurants/"+restaurant?.info?.id || index} style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}
            ><RestaurantCard key={restaurant?.info?.id || index} resdata={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
