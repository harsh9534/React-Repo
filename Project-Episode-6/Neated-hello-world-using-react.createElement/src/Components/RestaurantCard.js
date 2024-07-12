import { CDN_URL } from "../Utils/constants";
const stylecard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card" style={stylecard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
