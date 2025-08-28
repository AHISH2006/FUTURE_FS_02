import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-purple-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0,transparent_40%)] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-400 drop-shadow-lg mb-12 text-center">
          Your Cart
        </h1>

        {!cartItems || cartItems.length === 0 ? (
          <div className="text-center text-gray-400 bg-gray-800/70 rounded-lg p-10 shadow-lg">
            <p className="text-lg sm:text-xl mb-6">Your cart is empty.</p>
            <Link
              to="/products"
              className="text-purple-500 font-semibold hover:underline"
            >
              Go to Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.productId || item._id}
                  className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-800/80 rounded-xl shadow-md p-5 gap-4 hover:scale-[1.01] transition-transform"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-lg border border-gray-700"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-100">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="flex items-center border border-gray-600 rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId || item._id, item.quantity - 1)
                        }
                        className="px-3 py-1 text-gray-400 hover:text-white transition"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-gray-200 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId || item._id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-400 hover:text-white transition"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-lg font-bold text-purple-400 w-24 text-center sm:text-right">
                      {/* CHANGED: Display price in Rupees */}
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.productId || item._id)}
                      className="text-red-500 hover:text-red-400 transition font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 bg-gray-800/80 rounded-2xl shadow-xl p-6 sm:p-8 h-fit sticky top-28">
              <h2 className="text-2xl sm:text-3xl font-bold border-b border-gray-700 pb-3 mb-6 text-gray-100">
                Order Summary
              </h2>
              <div className="flex justify-between items-center mb-4 text-lg">
                <span>Subtotal:</span>
                <span className="font-semibold text-purple-400">
                  {/* CHANGED: Display price in Rupees */}
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between items-center mb-6 text-lg">
                <span>Shipping:</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>
              <div className="flex justify-between items-center text-xl sm:text-2xl font-bold border-t border-gray-700 pt-4">
                <span>Total:</span>
                {/* CHANGED: Display price in Rupees */}
                <span className="text-purple-400">₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
                           <Link
                to="/checkout"
                className="block text-center w-full mt-8 bg-purple-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
