import React , {useContext} from 'react'

import {CartContext} from '../Context/CartContext.jsx'

const Cart = (props) => {

  const context = useContext(CartContext);

  const addtocart = () => {

    context.setCart((prev) => {
      return [...prev , props.name]
    })
    context.setTotal((prev) => {
      return prev + Number(props.price)
    })

    context.Setquantity((prev) => {
      return prev + Number(props.quantity)
    })
  }
  return (
<>
<h4>Name : {props.name}</h4>
<h4>Price : {props.price}</h4>
<h4>Quantity : {props.quantity}</h4>

<button onClick={addtocart}>Add to Cart</button>
</>
  )
}

export default Cart