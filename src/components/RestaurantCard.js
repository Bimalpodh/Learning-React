import { CDN_URL } from "../utils/constants";


// RestaurantCard functional Component
const RestaurantCard = ({ resdata }) => {
  if (!resdata) {
    return null; // Skip rendering if data is missing
  }

  // Destructure restaurant info
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = resdata;

  return (
    <div className="res-card border border-solid   bg-gray-100 m-2 h-[400px] w-64 rounded-md hover:bg-gray-300">
      <img
        className="res-Img w-64 h-64 rounded-lg shadow-lg shadow-red-300"
        alt={name || "Restaurant"}
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : ""}
      />
      <h3 className=" text-blue-950 font-bold my-1 py-1 ">{name }</h3>
      <h4 className=" text-sm text-red-950 font-bold">{cuisines?.join(", ") }</h4>
      <h4 className=" text-sm text-cyan-900 font-bold">{costForTwo }</h4>
      <h4 className="text-rose-900 ">☆{avgRating ? `${avgRating} stars ☆` : "No ratings yet"}</h4>
    </div>
  );
};


// Higher order Component
// input- Restaurant=> Restaurant cardOffer
export const withDiscountInfo=(RestaurantCard)=>{
  return(props)=>{
    
    // console.log("this is prop ",props);
    const {header,subHeader}=props?.resdata?.aggregatedDiscountInfoV3; 
    // console.log(header,subHeader);
       
    
    return(
      <div className="discount  "> 
        <label className=" absolute  bg-slate-700 text-cyan-400 font-bold mx-5 mt-2 p-1 rounded-lg ">{header+" "+subHeader}</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
