import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";

// Star Icon Component
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.82 3.745 4.13.602c.73.107 1.02.997.494 1.508l-2.988 2.91.705 4.114c.124.727-.638 1.283-1.29.951L10 15.175l-3.695 1.942c-.652.332-1.414-.224-1.29-.95l.705-4.115-2.988-2.91c-.527-.511-.236-1.401.494-1.508l4.13-.602 1.82-3.745z"
      clipRule="evenodd"
    />
  </svg>
);

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    if (!user) {
      alert("You must be logged in to add items to the cart.");
      navigate("/login");
      return;
    }
    const success = await addToCart(product);
    if (success) {
      alert("Product added to cart!");
    } else {
      alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] flex flex-col h-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-[16/10] object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-100 pr-2">
              {product.name}
            </h3>
            {/* ✅ RATING DISPLAY ADDED HERE */}
            <div className="flex items-center flex-shrink-0 bg-gray-700 px-2 py-1 rounded-full">
              <StarIcon />
              <span className="text-white text-sm font-bold ml-1">{product.rating}</span>
            </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-purple-400 font-bold text-lg">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
