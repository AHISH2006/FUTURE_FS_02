import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background"; // Import the background for this page

function Home() {
  return (
    // This container holds both the background and the page content
    <div className="relative min-h-screen w-full">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-4">
        <h1 className="text-6xl md:text-8xl font-bold text-purple-400 animate-fadeIn">
          Welcome to GameX
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl animate-slideUp">
          Your ultimate destination for high-performance gaming components and gear.
        </p>
        <Link
          to="/products"
          className="mt-8 px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-purple-700 animate-bounceIn"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;