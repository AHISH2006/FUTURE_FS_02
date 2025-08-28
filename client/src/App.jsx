import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import LoginSignup from "./pages/Login.jsx";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Checkout from "./pages/Checkout.jsx";
import ManageAddresses from "./pages/ManageAddresses.jsx";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on login & register pages
  const hideNavbarPaths = ["/login", "/register","/profile"];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gamingDark text-white">
      
      {/* Conditionally render Navbar */}
      {shouldShowNavbar && (
        <div className={`md:block ${isSidebarOpen ? "hidden" : "block"}`}>
          <Navbar />
        </div>
      )}

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />   
        <Route path="/manage-addresses" element={<ManageAddresses />} /> 
      </Routes>
    </div>
  );
}

export default App;
