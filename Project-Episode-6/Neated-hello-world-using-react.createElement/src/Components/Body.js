import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mock_data";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

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
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
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

  if (listOfRestaurants.length === 0) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="restaurant-container">
        {listOfRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
