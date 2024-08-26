import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
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
          <h1 className="font-inter text-lg">Cart is empty, have a meal 🍔</h1>
        )}
        <CartItemList items={cartItems} />
        {cartItems.length ? <h1>Total : ₹{349 + 499}</h1> : ""}
      </div>
    </div>
  );
};
export default Cart;
