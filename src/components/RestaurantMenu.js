import { useState, useEffect } from "react";
import { SWIGGYMENU_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import shimmer from "./shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGYMENU_API + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (resInfo === null) return shimmer();

  const { name, avgRating, cuisines, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};
  console.log(name);

  const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Map through the cards and collect all items with their info

  const items = (cards || []).flatMap((card) => 
    {
      const itemCards = card?.card?.card?.itemCards || [];
      return itemCards.map((item,index) => 
      {
        const info = item?.card?.info || {};
        return {
        id: index, // Default to "N/A" if id is missing
        name: info.name || "Unnamed Item", // Default to "Unnamed Item"
        imageId: info.imageId || "No Image", // Default to "No Image"
        category: info.category || "Unknown Category", // Default category
        price: info.price || "Price Not Available", // Add price field
      };
    });
  }
);

  // if (resInfo===null)return shimmer(); otherWise
  return (
    <div className="menu">
      <div className="RestauItems">
        <h1>{name}</h1>
        <div>
          <div className="restu">
            <h3>✰ {avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
          </div>
          <p>{cuisines?.join(", ")}</p>
          <h4></h4>
        </div>
      </div>

      <div className="itemContainer">
        {items.map((item,index) => (
          <div key={index} className="item">
            <div>
              <h3 className="itemName">{item.name}</h3>

              <h4 className="price">Rs. {item?.price / 100}</h4>
              <h3>{item.category}</h3>
            </div>
            <div>
              <img
                className="recipeImg"
                alt="recipeImg"
                src={CDN_URL + item?.imageId}
              ></img>
              <button className="Add-btn">ADD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
