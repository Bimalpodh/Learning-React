import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link ,useParams} from "react-router";

let Header = () => {
  const [btnName, SetbtnName] = useState("Login");
  console.log("Header Render");

  const {resId}=useParams()
  
  
  

  // useEffect
  // If no Dependency array => useEffect is called on every rendering of component.
  // if the dependency array  is empty=[]=>useEffect is called on initial render(just once). 
  // if dependency array is [btnName]= > called everytime btnName is changed/updated
  useEffect(()=>{
  console.log("useEffect is called");
  

  },[btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="link" to="/" >Home</Link></li>
          <li><Link className="link" to="/about" >About</Link></li>
          <li><Link className="link" to="/contact">Contact Us</Link></li>
          <li><Link className="link" to="/cart">Cart</Link></li>

          <button
            className="Login-btn"
            onClick={() => {
              btnName==="Login"? 
              SetbtnName("Logout"):
              SetbtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
