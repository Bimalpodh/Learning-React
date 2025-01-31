
import { CDN_URL } from "../utils/constants";

// RestaurantCard functional Component
const RestaurantCard = ({ resdata }) => {
  if (!resdata) {
    return null; // Skip rendering if data is missing
  }

  // Destructure restaurant info
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resdata;

  return (
    <div className="res-card">
      <img
        className="res-Img"
        alt={name || "Restaurant"}
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : ""}
      />
      <h3>{name }</h3>
      <h4>{cuisines?.join(", ") }</h4>
      <h4>{costForTwo }</h4>
      <h4>{avgRating ? `${avgRating} stars` : "No ratings yet"}</h4>
    </div>
  );
};

export default RestaurantCard;
