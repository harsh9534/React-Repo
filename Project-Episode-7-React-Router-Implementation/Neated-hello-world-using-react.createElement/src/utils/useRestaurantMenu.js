import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";
const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
    console.log("Hi");
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
