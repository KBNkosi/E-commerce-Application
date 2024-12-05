import { useCart } from "../context/CartContext";
import { Link} from "react-router-dom";
import { FaTrash } from "react-icons/fa";


/**
 * The CartPage component renders the shopping cart page.
 * It shows a list of the items in the cart, the order summary and
 * the option to proceed to checkout.
 * If the cart is empty, it shows a message and a link to continue shopping.
 * @returns {JSX.Element} The JSX element representing the page.
 */
const CartPage = () => {
  const{cart, dispatch, total, itemCount}=useCart();

/**
 * Updates the quantity of a given item in the cart
 * @param {Number} id - The id of the item to update
 * @param {Number} newQuantity - The new quantity of the item
 */
  const handleUpdateQuantity=(id,newQuantity)=>{
    if(newQuantity < 1) return;

    dispatch({
      type:"UPDATE_QUANTITY",
      payload:{id, quantity: newQuantity}
    });
  };

/**
 * Removes a single item from the cart by its id.
 * @param {Number} id - The id of the item to remove
 */
  const handleRemoveItem=(id)=>{
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    });
  };

 /* This part of the code in the `CartPage` component is a conditional check to determine what to
 render if the `cart` array is empty. */
  if(cart.length===0){
    return(
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">Add some items to your cart to see them here!</p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart({itemCount} items)</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
       {/* Cart Items List */}
       <div className="md:col-span-2 space-y-4">
        {cart.map((item)=>(
          <div
            key={item.id}
            className="flex gap-4 border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            {/*Product Image */}
            <Link to={`/products/${item.id}`} className="flex-shrink-0">
              <img
               src={item.images[0]}
               alt={item.title}
               className="w-24 h-24 object-cover rouded-md" 
               />
            </Link>

            {/*Product Details */}
            <div className="flex-grow">
             <Link
               to={`/products/${item.id}`}
               className="text-lg font-semibold hover:text-indigo-600"
             >
              {item.title}
             </Link>

             <div className="text-gray-600 text-sm mt-1">
              Brand: {item.brand}
             </div>

             {/*Price */}
             <div className="mt-2">
              {item.discountPercentage > 0 ?(
                <div className="flex items-center gap-2">
                 <span className="text-gray-500 line-through">
                  ${item.price.toFixed(2)}
                 </span>
                 <span className="text-indigo-600 font-semibold">
                  ${(item.price*(item.price * item.discountPercentage / 100)).toFixed(2)}
                 </span>
                 <span className="text-red-500 text-sm">
                  ({item.discountPercentage}% )
                 </span>
                </div>
              ) : (
                <span className="text-inidigo-500 font-semibold">
                    ${item.price.toFixed(2)}
                </span>
              )}
             </div>

             {/*Quantity Controls */}
             <div className="flex items-center gap-2 mt-2">
               <div className="flex items-center border rounded-md">
                 <button
                   onClick={()=>handleUpdateQuantity(item.id, item.quantity-1)}
                 >
                  -
                 </button>
                 <span className="px-4 py-1">{item.quantity}</span>
                 <button
                   onClick={()=>handleUpdateQuantity(item.id, item.quantity+1)}
                   className="px-3 py-1 border-1 hover:bg-gray-100"
                 >
                   +
                 </button>
               </div>
               <button
                 onClick={()=>handleRemoveItem(item.id)}
               >
                 <FaTrash size={20} />
               </button>
             </div>
            </div>
          </div>
        ))}
        </div>

        {/*Order Summary */}
        <div className="md:col-span-1">
          <div className="border rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2" mb-4>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="border-t pt-2 mt-2">
                 <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                 </div>
              </div>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors">
              Proceed to Checkout
            </button>

            <Link
              to="/"
              className="block text-center text-indigo-600 hover:text-indigo-700 mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage