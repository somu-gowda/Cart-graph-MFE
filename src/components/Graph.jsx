import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

// get product list
import ProductService from "../services/Products";

const Graph = (props) => {
  // props from parent
  let { cartItems } = props;

  // state
  const [productName, setProductName] = useState([]);
  const [addCart, setAddCart] = useState([]);

  // useffect
  useEffect(() => {
    const productList = ProductService.getProductList();
    // getting product names
    let productItems = [];
    productList.forEach((product) => {
      productItems.push(product.name);
    });
    setProductName(productItems);

    // getting selected add to cat items
      getcartQty(productList, cartItems);
  }, [cartItems]);

  const getcartQty = (products, cartItems) => {
    setAddCart([]);
    let cartQty = [];

    // getting products based Id
    products && products.forEach((product) => {
      cartItems && cartItems.forEach((item) => {
        if (item.id == product.id) {
          cartQty.push(item.qty);
        }
      });
    });
    setAddCart(cartQty);
  };

  // array items for x and y axis
  let x = productName;
  let y = addCart;

  // retutn grap based on product and add cart items
  return (
    <div className="container justify-content-center text-center shadow">
      <h3>Cart Graph MF</h3>
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: "scatter",
          },
          { type: "bar", x: x, y: y },
        ]}
        layout={{ width: 800, height: 400, title: " Cart Plot" }}
      />
    </div>
  );
};

export default Graph;
