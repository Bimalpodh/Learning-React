import {  useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

let Header = () => {
  const [btnName, SetbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {LoggedInuser}=useContext(UserContext);
 
  //subscribing the store using  selector hook
  const cartItems=useSelector((store)=>store.cart.items)
  // console.log(cartItems);
  


  return (
    <div className="header-Container sticky top-0 left-0 w-full flex justify-between bg-orange-500 shadow-m ">
      <div className="logo-container my-2">
        <img className="w-20  mx-4 rounded-lg " src={LOGO_URL} alt="logo" />
        <h3 className="mx-5 text-neutral-50">Deliciousa</h3>
      </div>

      <div className="nav-items  flex items-center">
        <ul className="flex text-xl text-cyan-100 ">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>

          <li className="px-4">
            <Link className="link" to="/">
              Home
            </Link>
          </li >
          <li className="px-4">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 ">
            <Link className="link" to="/cart">
            cart- 
             <sup className="text-[#085308] font-bold">{cartItems.length} items</sup> 
            </Link>
          </li>
          <li>
          <button
            className="Login-btn px-2 "
            onClick={() => {
              btnName === "Login" ? SetbtnName("Logout :🦹") : SetbtnName("Login");
              // console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <div >{LoggedInuser}</div>


          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Header;
