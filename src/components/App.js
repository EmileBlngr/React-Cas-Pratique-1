import '../styles/App.css';
import Banner from './banner';
import Cart from './cart';
import ShoppingList from './shoppingList';
import Footer from './Footer'
import { useState, useEffect } from 'react';


function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))}, [cart])
  return (
    <div className='app-container'>
      <Banner />
      <div className='body-container'>
        <div className='cart-left-container'>
          <Cart cart = {cart} updateCart = {updateCart}/>
        </div>
        <div className='sales-right-container'>
          <ShoppingList cart = {cart} updateCart = {updateCart}/>
        </div>
      </div>
      <Footer />
    </div>  
  );
}

export default App;
