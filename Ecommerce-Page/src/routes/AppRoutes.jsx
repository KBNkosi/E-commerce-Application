import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage";
import CategoryPage from "../Pages/CategoryPage";
import ProductDetailPage from "../Pages/ProductDetailPage";
import CartPage from "../Pages/CartPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes