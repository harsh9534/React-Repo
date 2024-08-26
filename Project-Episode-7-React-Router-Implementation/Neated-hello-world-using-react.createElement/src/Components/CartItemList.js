import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import defImage from "../utils/defImage.png";
import { addItem, removeItem } from "../utils/cartSlice"; // Assuming you have a removeItem action
import { useState } from "react";

const CartItemList = ({ items }) => {
  //   const dispatch = useDispatch();

  //   // Create an object to store the count of each item
  //   const [itemCounts, setItemCounts] = useState({});

  //   const handleAddItem = (item) => {
  //     const itemId = item.card.info.id;

  //     // Dispatch the action to add item to the cart
  //     dispatch(addItem(item));

  //     // Update the item count
  //     setItemCounts((prevCounts) => ({
  //       ...prevCounts,
  //       [itemId]: prevCounts[itemId] ? prevCounts[itemId] + 1 : 1,
  //     }));
  //   };

  //   const handleRemoveItem = (item) => {
  //     const itemId = item.card.info.id;

  //     // Dispatch the action to remove item from the cart
  //     if (itemCounts[itemId] > 1) {
  //       dispatch(removeItem(item));
  //       // Update the item count
  //       setItemCounts((prevCounts) => ({
  //         ...prevCounts,
  //         [itemId]: prevCounts[itemId] - 1,
  //       }));
  //     } else {
  //       // If count is 1, removing the item will set count to 0
  //       dispatch(removeItem(item));
  //       const { [itemId]: _, ...restCounts } = itemCounts;
  //       setItemCounts(restCounts);
  //     }
  //   };

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
          <div className="p-4 w-3/12 relative">
            <img
              className="w-40 rounded-lg"
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : defImage
              }
              alt={item.card.info.name}
            />
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center">
              {itemCounts[item.card.info.id] ? (
                <div className="flex items-center bg-white shadow-lg rounded-lg p-2">
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="p-2 text-green-600 font-bold hover:text-green-800 transition-all duration-300"
                  >
                    -
                  </button>
                  <span className="px-4 font-semibold text-green-600">
                    {itemCounts[item.card.info.id]}
                  </span>
                  <button
                    onClick={() => handleAddItem(item)}
                    className="p-2 text-green-600 font-bold hover:text-green-800 transition-all duration-300"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddItem(item)}
                  className="p-2 text-green-600 font-bold bg-white shadow-lg rounded-lg hover:text-green-800 transition-all duration-300"
                >
                  ADD
                </button>
              )}
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
