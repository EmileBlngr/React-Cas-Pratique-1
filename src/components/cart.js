import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce((acc, plantType)=> acc + plantType.amount * plantType.price, 0) 
    useEffect(() => {
      document.title = `J'aurai ${total}€ à payer 💸`
    }, [total])
    return isOpen ?(
      <div className='cart-container'>
        <h2 className='cart-title'>Panier</h2>
        {cart.map(({name, price, amount}, index) => (
        <div key = {`${name}-${index}`}>
        {name} {price}€ x {amount}
      </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])} className='cart-reset-btn'>Vider le panier</button>
      <button onClick={() => setIsOpen(false)} className='cart-close-btn'>Fermer le panier</button>
      </div>
    ) : (
      <div>
        <h3 className='cart-close-title'>Votre panier est fermé</h3>
        <button onClick={() => setIsOpen(true)} className='cart-open-btn'>Ouvrir le panier</button>
      </div>
    )
    }

    export default Cart