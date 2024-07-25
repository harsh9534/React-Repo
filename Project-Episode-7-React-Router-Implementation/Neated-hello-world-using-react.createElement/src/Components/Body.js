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
        "https://www.swiggy.com/mapi/homepage/getCards?lat=26.26920&lng=73.00900"
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
      <div className="flex bg-yellow-50 m-2 shadow-lg">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg shadow-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 bg-black m-4 py-1 shadow-md rounded-lg text-white "
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
            className="px-4 bg-black m-4 py-1 shadow-md rounded-lg text-white"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredResList);
            }}
          >
            Top Rated restaurant
          </button>
          <label className="font-mono">Username: </label>
          <input
            className="border border-black rounded-lg p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
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
