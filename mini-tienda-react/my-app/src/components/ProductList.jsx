import React from 'react';

const ProductList = ({ products, addToCart, successMessage }) => {
  return (
    <div>
      <h2>🛍️ Productos</h2>

      {successMessage && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
        }}>
          {successMessage}
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 columnas de igual ancho
          gap: '20px', // Espacio entre los productos
          padding: '10px',
        }}
      >
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center', // Centrar el contenido
              backgroundColor: '#e6f3fa', // Fondo celeste 
            }}
          >
            <img
              src={product.image} // Usar la imagen específica del producto
              alt={product.name}
              width="150" // Aumentar el tamaño de la imagen
              height="150"
              style={{ borderRadius: '8px', marginBottom: '10px' }} // Margen inferior para separar de la descripción
            />
            <div>
              <strong>{product.name}</strong>
              <p>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;