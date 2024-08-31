import React, { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
//import resList from "../utils/mock_data";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const PromotedCard = withPromotedLabel(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9578041&lng=77.7130364"
      );
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      const json = await response.json();
      console.log(json); // Log the JSON response to inspect its structure

      const restaurants =
        json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } else {
        setError("Restaurants data not found in the JSON response");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline right now, please check your internet
        connection
      </h1>
    );
  }
  if (listOfRestaurants.length === 0) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="body">
      <div className="flex justify-between items-center bg-white shadow-lg p-4">
        <h1 className="text-xl font-semibold text-gray-700">
          What's on your mind?
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            className="w-72 border border-solid border-black rounded-2xl shadow-lg p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-2 text-black bg-white border border-black rounded-2xl shadow-md hover:text-white hover:bg-black transition-all duration-300"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 m-2 text-black bg-white border border-black rounded-2xl shadow-md hover:text-white hover:bg-black transition-all duration-300"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredResList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {listOfRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <PromotedCard resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
