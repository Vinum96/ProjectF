import "./App.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/router/HomePage";
import AllProducts from "./pages/router/AllProducts";
import CartPage from "./pages/router/CartPage";
import ProductPage from "./pages/router/ProductPage";
import ProductsInCategories from "./pages/router/ProductsInCategories";
import CategoriesPage from "./pages/router/CategoriesPage";
import AllSales from "./pages/router/AllSales";
import NotFoundPage from "./pages/router/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import HomeSale from "./components/homeComponents/HomeSale";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="CategoriesPage" element={<CategoriesPage />} />
          <Route path="AllProducts" element={<AllProducts />} />
          <Route path="CartPage" element={<CartPage />} />
          <Route path="ProductPage" element={<ProductPage />} />
          <Route path="HomeSale" element={<HomeSale />} />
          <Route path="ProductsInCategories" element={<ProductsInCategories />} />
          <Route path="AllSales" element={<AllSales />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
