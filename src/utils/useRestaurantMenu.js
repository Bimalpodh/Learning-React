import { useEffect, useState } from "react";
import { SWIGGYMENU_API } from "./constants";


const useResaurantMenu=(resId)=>{
const [resInfo,setResInfo]=useState(null);

  // fetchData

    // useEffect
    // If no Dependency array => useEffect is called on every rendering of component.
    // if the dependency array  is empty=[]=>useEffect is called on initial render(just once).
    // if dependency array is [btnName]= > called everytime btnName is changed/updated
    // useEffect(() => {
    //   console.log("useEffect is called");
    // }, [btnName]);
  useEffect(()=>{
    fetchMenu()
  },[])

  const fetchMenu = async () => {
    try {
      const data = await fetch(SWIGGYMENU_API + resId);
      const json = await data.json();
      // console.log(json);
      setResInfo(json.data);
    } catch (err) {
      // console.error(err);
    }
  };

  return resInfo;
}


export default useResaurantMenu;