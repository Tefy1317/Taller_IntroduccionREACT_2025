import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ProductList from './components/ProductList'
import './App.css'
import Cart from './components/cart'
import Contacto from './components/Contact'

function App() {
  const [products] = useState([
    { id: 1, name: 'Tenis Celestes para Damas', price: 550.00, image: '/tm.jpeg' },
    { id: 2, name: 'Tacones de 8cm', price: 650.00, image: '/cm.jpg' },
    { id: 3, name: 'Sandalia para Dama', price: 200.00, image: '/sm.jpg' },
    { id: 4, name: 'Tenis azules para Caballero', price: 550.00, image: '/th.jpg' },
    { id: 5, name: 'Zapato Casual para Caballero', price: 700.00, image: '/ch.jpg' },
    { id: 6, name: 'Sandalia para Caballero', price: 150.00, image: '/sh.jpeg' },
  ])

  const [cart, setCart] = useState([])

  const [successMessage, setSuccessMessage] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product])
    setSuccessMessage(`✅ Se agregó el producto al carrito exitosamente`);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  }

  const removeFromCart = (itemToRemove) => {
    const index = cart.findIndex(item => item.id === itemToRemove.id)
    if (index !== -1) {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  const clearCart = () => {
    setCart([])
  }


  return (
    <div className="container">
      <div className="Menu">   
        <ul>
          <img src="/react.svg" alt="Logo de la tienda" style={{ width: '50px', height: 'auto' }} />
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList products={products} addToCart={addToCart}  successMessage={successMessage} />} />
        <Route path="/carrito" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        <Route path="/contacto" element={<Contacto />}  />
      </Routes>
    </div>
  )
}

export default App
