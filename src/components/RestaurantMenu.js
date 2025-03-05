import useResaurantMenu from "../utils/useRestaurantMenu";
import shimmer from "./shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useResaurantMenu(resId);

  const [showIndex,setShowIndex]=useState(0);

  if (resInfo === null) return shimmer();
  const { name, avgRating, cuisines, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // Map through the cards and collect all items with their info
  const items = (cards || []).flatMap((card) => {
    const itemCards = card?.card?.card?.itemCards || [];
   
    return itemCards.map((item, index) => {
      const info = item?.card?.info || {};
      return {
        id: index, // Default to "N/A" if id is missing
        name: info.name || "Unnamed Item", // Default to "Unnamed Item"
        imageId: info.imageId || "No Image", // Default to "No Image"
        category: info.category || "Unknown Category", // Default category
        price: info.price || "Price Not Available", // Add price field
      };
    });
  });

  // if (resInfo===null)return shimmer(); otherWise
  return (
    <div className="menu mx-20">
      <div className="RestauItems ">
        <h1 className="text-3xl my-3 text-cyan-900 font-bold font-mono">
          {name}
        </h1>
        <div className="flex  justify-between  my-10">
          <div className="restu ">
            <h3>✰ {avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
          </div>
          <p className=" text-4xl font-serif text-rose-600 ">
            {cuisines?.join(", ")}
          </p>
          <h4></h4>
        </div>
      </div>

      {/* Catagory accodium */}
      <div className="accodium  ">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index===showIndex?null:index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
