import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5 ">
      <h1 className="text-2xl font-mono font-bold">Cart 🛒</h1>
      <div className="w-6/12 m-auto ">
        <button
          onClick={handleClick}
          className="font-mono p-2 m-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="font-mono text-lg">
            Cart is empty ,kuch kha lo bhai🤤
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
