// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VideoGrid from "./components/VideoGrid";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage"; // Import CartPage

const App = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Ambil item keranjang dari localStorage saat pertama kali dimuat
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    // Simpan item keranjang ke localStorage setiap kali `cartItems` berubah
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Fungsi untuk menambah item ke keranjang
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="font-sans bg-gray-50">
      <Header cartItems={cartItems} /> {/* Oper `cartItems` ke Header */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <VideoGrid onAddToCart={addItemToCart} />{" "}
              {/* Oper `addItemToCart` ke VideoGrid */}
              <SubscribeSection />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />{" "}
        {/* Rute untuk halaman Cart */}
      </Routes>
      {/* Footer hanya ditampilkan jika URL bukan "/login" atau "/register" */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
};

// Membungkus App dengan Router agar memiliki akses ke useLocation
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
