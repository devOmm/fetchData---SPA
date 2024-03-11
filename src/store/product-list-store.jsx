
import React, { createContext, useCallback, useReducer } from "react";

export const ProductListContext = createContext({
  productList: [],
  addProduct: () => {},
  toggleFavorite: () => {},
});

const productListReducer = (currProductList, action) => {
  let newProductList = currProductList;
  if (action.type === "ADD_INITIAL_PRODUCTS") {
    newProductList = action.payload.products;
  } else if (action.type === "ADD_PRODUCT") {
    newProductList = [action.payload, ...currProductList];
  } else if (action.type === "TOGGLE_FAVORITE") {
    const updatedProductList = currProductList.map(product => {
      if (product.id === action.payload.productId) {
        return {
          ...product,
          favorite: !product.favorite // toggle favorite status
        };
      }
      return product;
    });
    newProductList = updatedProductList;
  }
  return newProductList;
};

const ProductListProvider = ({ children }) => {
  const [productList, dispatchProductList] = useReducer(productListReducer, []);

  const addProduct = (product) => {
    dispatchProductList({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  const addInitialProducts = (products) => {
    dispatchProductList({
      type: "ADD_INITIAL_PRODUCTS",
      payload: {
        products,
      },
    });
  };

  const toggleFavorite = useCallback(
    (productId) => {
      dispatchProductList({
        type: "TOGGLE_FAVORITE",
        payload: {
          productId,
        },
      });
    },
    [dispatchProductList]
  );

  return (
    <ProductListContext.Provider value={{ productList, addProduct, toggleFavorite }}>
      {children}
    </ProductListContext.Provider>
  );
};

export default ProductListProvider;
