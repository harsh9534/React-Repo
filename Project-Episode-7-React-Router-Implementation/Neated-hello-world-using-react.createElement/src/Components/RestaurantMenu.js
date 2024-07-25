import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  const handleToggle = (index) => {
    setShowItems((showItems) => (showItems === index ? null : index));
  };

  return (
    <div className="text-center">
      <h1 className="font-bold font-mono shadow-lg text-3xl my-6">{name}</h1>
      <p className="font-bold text-xl font-mono">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories accordian components */}
      {categories.map((category, i) => (
        <ResCategory
          key={i}
          data={category?.card?.card}
          showItems={i === showItems ? true : false}
          onClick={() => handleToggle(i)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
