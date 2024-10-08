import { useState, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import smokingBurgerImage from "../utils/logo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-white shadow-md my-2 ">
      <div className="logo-container">
        <img className="w-56" src={smokingBurgerImage}></img>
      </div>
      <div className="flex items-center font-inter text-lg">
        <ul className="flex p-4 m-4 ">
          {/* <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"} </li> */}
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4  ">
            <Link to="/cart"> 🛒- {cartItems.length} </Link>
          </li>
          <li className="px-4 font-bold">{userName}</li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
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
