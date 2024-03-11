import { useContext, useEffect, useState } from "react";
import Product from "./Product";
// import { ProductList as PostListData } from "../store/product-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const [productList, setProductList] = useState([]);

  return (
    <>
    
      <center>
      <h1>DashBoard</h1>
      </center>
    </>
  );
};



export default Dashboard;
