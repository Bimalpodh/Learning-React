import ItemList from "./ItemList";
import { useDispatch,useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart=()=>{
  const cartItem=useSelector((store)=>store.cart.items);

  // dispatch is create to call reduce clearCart function
  const dispatch=useDispatch();
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
 


  return(
    <div className="cart-Container ">
      <div>
        <h1 className="font-bold flex text-center justify-center align-middle bg-gray-400 h-12  ">Cart</h1>
      </div>
      <div className="w-6/12 m-auto">
        <button className="bg-black text-white my-4 h-12 w-28 rounded-lg font-bold " onClick={handleClearCart}> clear Cart</button>
        <ItemList items={cartItem}/>
        <h1>add items</h1>
      </div>
    </div>
  )
}
export default Cart;