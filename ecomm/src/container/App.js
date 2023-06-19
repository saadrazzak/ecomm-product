import React from "react";
import Home from "../pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from '../component/footer/Footer'
import ProductPage from "../pages/product/ProductPage";
import CategoryList from "../component/categoryList/CategoryList";
import './app.css'
function App(params) {
  return (
    <>
      <Router>
      <>
      <Header/>
        <Routes>
           
            <Route path="/" element={<Home />} exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/productDetails/:productId" element={<ProductPage />} exact />
            <Route path="/productListing/:listId" element={<CategoryList />} exact />
        </Routes>
        <Footer/>
      </>
      </Router>
     
    </>
  );
}

export default App;