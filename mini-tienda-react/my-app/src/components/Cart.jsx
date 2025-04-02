import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const groupedItems = cart.reduce((acc, item) => {
    const key = item.id;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1, image: item.image || "/banner.png" }; // Imagen por defecto
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  const total = Object.values(groupedItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2>🛒 Carrito</h2>

      {cart.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          <ul>
            {Object.values(groupedItems).map((item) => (
              <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <img
                  src={item.image}  // Muestra la imagen del producto
                  alt={item.name}
                  width="50"
                  height="50"
                  style={{ borderRadius: '8px' }}
                />
                <div>
                  <strong>{item.name}</strong> x{item.quantity} - ${item.price * item.quantity}
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => removeFromCart(item)}
                  >
                    Eliminar uno
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;
