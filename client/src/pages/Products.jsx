import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.jsx";
import SidebarFilters from "../components/SidebarFilters.jsx";
import RunningImageAd from "../components/RunningImageAd.jsx";
import Background from "../components/Background.jsx";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/outline";

// --- Helper functions are defined outside the component for efficiency ---
const parsePriceFilter = (value) => {
  if (!value || value === "All") return [0, Infinity];
  if (value.endsWith("+")) {
    return [parseInt(value, 10) || 0, Infinity];
  }
  const [min, max] = value.split("-").map((n) => parseInt(n.trim(), 10));
  return [min || 0, max || Infinity];
};

// ✅ THIS IS THE CORRECTED RATING FUNCTION
const getMinRating = (value) => {
  if (!value || value === "All") return 0;

  if (typeof value === "number") {
    return value; // If SidebarFilters passes a number directly
  }

  if (typeof value === "string") {
    return parseFloat(value.replace("+", "").trim()) || 0;
  }

  return 0;
};

function Products({ isSidebarOpen, setIsSidebarOpen }) {
  const [filters, setFilters] = useState({
    category: "All",
    price: "All",
    rating: "All",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (newFilters) => setFilters(newFilters);

 const filteredProducts = useMemo(() => {
  const minRating = getMinRating(filters.rating);
  const [minPrice, maxPrice] = parsePriceFilter(filters.price);
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return productsData.filter((product) => {
    const {
      name = "",
      category = "",
      price = 0,
      rating = 0,   // ✅ default to 0 if missing
    } = product;

    const ratingMatch = Number(rating) >= minRating;   // ✅ force numeric
    const priceMatch = price >= minPrice && price <= maxPrice;
    const categoryMatch = filters.category === "All" || category === filters.category;
    const searchMatch =
      !lowerCaseSearchTerm || name.toLowerCase().includes(lowerCaseSearchTerm);

    return ratingMatch && priceMatch && categoryMatch && searchMatch;
  });
}, [filters, searchTerm]);
 // This logic re-runs only when filters or search term change

  return (
    <div className="relative min-h-screen pt-24">
      <Background />
      {isSidebarOpen && (
        <button
          aria-label="Close filters overlay"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
        />
      )}
      <div className="relative z-40">
        <SidebarFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
      <main
        className={`relative z-10 transition-[margin] duration-300 px-4 sm:px-6 lg:px-8 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex items-center justify-between gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-200 tracking-wide">
              Gaming Components
            </h2>
            <div className="flex items-center gap-2">
              <button
                className="md:hidden bg-purple-600 text-white px-4 py-2 rounded-md shadow hover:bg-purple-700 transition"
                onClick={() => setIsSidebarOpen(true)}
              >
                ☰ Filters
              </button>
              <button
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-white/10 bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                title={isSidebarOpen ? "Hide filters" : "Show filters"}
              >
                {isSidebarOpen ? (
                  <>
                    <ChevronDoubleLeftIcon className="w-5 h-5" /> Hide Filters
                  </>
                ) : (
                  <>
                    <ChevronDoubleRightIcon className="w-5 h-5" /> Show Filters
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="mb-8">
            <RunningImageAd />
          </div>
          <div className="mb-6 max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-purple-500 transition shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-gray-400 text-lg">
              No products found matching your filters and search.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Products;
