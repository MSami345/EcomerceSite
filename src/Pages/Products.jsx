// src/Pages/Products.js
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../Styles/Products.css";
import useSWR from "swr";
import fetcher from "../Hooks/UseProducts";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products?limit=4",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }, [data]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch products");
      setLoading(false);
    }
  }, [error]);

  return (
    <div>
      <Header headerText="Products" />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products by title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <FontAwesomeIcon icon={faSadTear} size="3x" />
          <p>No Products Available</p>
        </div>
      )}
      <ToastContainer
        autoClose={2000}
        style={{ fontSize: "0.8rem" }}
        // hideProgressBar={"true"}
        position="top-right"
      />
    </div>
  );
};

export default Products;
