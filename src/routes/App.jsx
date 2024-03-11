import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import PostList from "../components/ProductList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProductListProvider from "../store/product-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <ProductListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </ProductListProvider>
  );
}

export default App;
