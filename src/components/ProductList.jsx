import React, { Component } from "react";
import { products } from "../data/products";
import ProductItem from "./ProductItem";
import Cart from "./Cart";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item, index) => index !== id),
    }));
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <h2>Lista de Productos</h2>
          <div className="row">
            {}
            {products.map((p) => (
              <ProductItem
                key={p.id}
                product={p}
                onAddToCart={this.addToCart} 
              />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
        </div>
      </div>
    );
  }
}

export default ProductList;
