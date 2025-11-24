import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  const handleClick = () => {
    
    onAddToCart(product);
  };

  return (
    <div className="col-md-6 mb-3">
      <div className="card shadow-sm p-3">
        <h5>{product.name}</h5>
        <p className="mb-1">Precio: ${product.price}</p>
        <button className="btn btn-primary btn-sm" onClick={handleClick}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
