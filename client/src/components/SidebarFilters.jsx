import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function SidebarFilters({ filters, onFilterChange, isOpen, onClose }) {
  const categories = ["All", "CPU", "GPU", "RAM", "Motherboard", "Storage"];

  const prices = [
    { label: "All", value: "All" },
    { label: "₹0 - ₹8,300", value: "0-8300" },
    { label: "₹8,301 - ₹25,000", value: "8301-25000" },
    { label: "₹25,001 - ₹50,000", value: "25001-50000" },
    { label: "₹50,001+", value: "50001-9999999" },
  ];

  // Ratings will send clean values like "4+", "3+", etc.
  const ratings = [
    { label: "All Ratings", value: "All" },
    { label: "4★ & up", value: "4+" },
    { label: "3★ & up", value: "3+" },
    { label: "2★ & up", value: "2+" },
    { label: "1★ & up", value: "1+" },
  ];

  const handleChange = (filterType, value) => {
    onFilterChange({ ...filters, [filterType]: value });
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-gray-200 shadow-lg transform transition-transform duration-500 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-purple-400">Filters</h2>
        <XMarkIcon
          className="w-7 h-7 cursor-pointer md:hidden"
          onClick={onClose}
        />
      </div>

      <div className="p-4 flex flex-col gap-6">
        {/* Category Filter */}
        <div className="filter-section">
          <h3 className="text-lg font-semibold text-gray-100">Category</h3>
          {categories.map((category) => (
            <label key={category} className="block mb-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={() => handleChange("category", category)}
                className="mr-2 accent-purple-600"
              />
              {category}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="filter-section">
          <h3 className="text-lg font-semibold text-gray-100 mb-2">Price</h3>
          {prices.map(({ label, value }) => (
            <label key={value} className="block mb-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="price"
                value={value}
                checked={filters.price === value}
                onChange={() => handleChange("price", value)}
                className="mr-2 accent-purple-600"
              />
              {label}
            </label>
          ))}
        </div>

        {/* Rating Filter */}
        <div className="filter-section">
          <h3 className="text-lg font-semibold text-gray-100 mb-2">Rating</h3>
          {ratings.map(({ label, value }) => (
            <label key={value} className="block mb-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={value}
                checked={filters.rating === value}
                onChange={() => handleChange("rating", value)}
                className="mr-2 accent-purple-600"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default SidebarFilters;
