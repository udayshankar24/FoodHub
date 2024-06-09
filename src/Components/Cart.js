import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Items from "./Items";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className=" w-6/12 m-auto">
        <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
          ClearCart
        </button>
        {cartItems.length == 0 && <h1>Please Add Items.Your cart is empty</h1>}
        <Items items={cartItems}></Items>
      </div>
    </div>
  );
};
export default Cart;
