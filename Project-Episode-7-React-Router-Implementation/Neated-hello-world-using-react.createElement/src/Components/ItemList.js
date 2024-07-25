import { CDN_URL } from "../Utils/constants";
import defImage from "../utils/defImage.png";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-[1px] text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {"  "}- ₹{item.card.info.price / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute">
              <button className="p-2 shadow-lg bg-black text-white mx-[40px] rounded-lg my-[145px] hover:bg-white hover:text-black  ">
                Add +
              </button>
            </div>
            <img
              className="w-40 "
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : defImage
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
