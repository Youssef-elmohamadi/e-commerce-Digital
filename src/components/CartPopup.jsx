import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./Redux/cartSlice/CartSlice";

const CartPopup = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      dispatch(removeItem(id));
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="border w-[370px] cart-button min-h-[150px] absolute top-[60px] right-0 bg-white lg:hidden group-hover/cart:block z-50 p-4 rounded-lg shadow-lg">
      {cart.items.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <p className="text-sm font-bold text-gray-500">
              {cart.totalQuantity} item(s) in Cart
            </p>
            <p className="text-sm font-bold text-gray-500">
              Subtotal:
              <br />
              <span className="text-base text-gray-500 font-bold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </p>
          </div>
          {cart.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-6">
              <div className="w-1/4">
                <img
                  src={item.image || "default-image.jpg"}
                  alt={item.title}
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="w-3/4">
                <h4 className="text-sm font-bold text-gray-700 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mb-2">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-500">Qty:</label>
                    <input
                      type="number"
                      min="1"
                      className="w-12 border rounded text-center text-sm"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-500 hover:text-red-500 transition"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                    <button className="text-gray-500 hover:text-blue-500 transition">
                      <IoSettingsSharp size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="uppercase bg-gray-600 w-full text-sm text-white py-2 rounded hover:bg-gray-500 transition-all duration-300 ease-in-out">
            Proceed to checkout
          </button>
          <button className="uppercase bg-gray-400 w-full text-sm text-white py-2 rounded mt-4 hover:bg-gray-600 transition-all duration-300 ease-in-out">
            View and edit cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPopup;
