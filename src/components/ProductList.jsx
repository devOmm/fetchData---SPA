import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData, Link } from "react-router-dom";

const ProductList = () => {
  const productList = useLoaderData();
  
  // Internal CSS styles
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    textDecoration: "none",
    color: "white",
    backgroundColor: "blue",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      {productList.length === 0 && <WelcomeMessage />}
      <div className="row">
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div style={buttonContainerStyle}>
        <Link to="/" style={buttonStyle}>Back to Dashboard</Link>
      </div>
    </>
  );
};

export const productLoader = () => {
  return fetch("https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export default ProductList;
