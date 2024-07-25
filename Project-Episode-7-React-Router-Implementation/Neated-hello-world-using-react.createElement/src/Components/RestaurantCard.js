import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId } = resData?.info;
  return (
    <div className="m-2 p-4 w-[250px] rounded-lg bg-grey-50 hover:bg-gray-200 shadow-lg">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};

//Creating an higher order component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
