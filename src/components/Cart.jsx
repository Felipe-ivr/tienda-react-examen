import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="card p-3 shadow-sm">
      <h4>Carrito</h4>

      {cart.length === 0 && <p>No hay productos en el carrito.</p>}

      {cart.map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center mb-2"
        >
          <span>
            {item.name} - ${item.price}
          </span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeFromCart(index)}
          >
            Eliminar
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-3">
          <strong>Total: ${total}</strong>
        </div>
      )}
    </div>
  );
};

export default Cart;
