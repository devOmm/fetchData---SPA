import { useContext, useState } from "react";
import {  AiFillHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const Product = ({ product }) => {

  
  const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

  const isFavourited = storageItem.includes(product.id)

  const handleToggleFavourite = (id) => {
    
    if (!isFavourited) {

      const newStorageItem = [...storageItem, id]
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    } else {

      const newStorageItem = storageItem.filter((savedId) => savedId !== id)
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    }
    
  }
  console.log(storageItem);
  return (
    <div className="col-sm-6">
      <div className="card post-card" >
      <div className="card-body">
        <h5 className="card-title">
          
          <span
            className={isFavourited ? `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success`: `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary`}
            onClick={() => handleToggleFavourite(product.id)}
          >
            {isFavourited ? <FaHeart /> : <AiFillHeart />}
            
          </span>
        </h5>
        <p className="card-text">
          <img src={product.thumbnailUrl} alt={product.title}   style={{ width: "100%",height:"20rem" }}/>
        </p>
        
        <div className="alert alert-success reactions" role="alert">
          {product.title} 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
