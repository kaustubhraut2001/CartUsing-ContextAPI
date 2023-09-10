import React  , {useContext} from 'react'
import {CartContext} from '../Context/CartContext.jsx'

const Items = () => {
	const context = useContext(CartContext);

	console.log(context);
  return (
<>
<h4>{context.Items} </h4>
<h4>Cart Items List : {context.cart.join(", ")}</h4>
<h4>Quantity : {context.quantity}</h4>
<h4>Total : {context.total}</h4>
</>

	)
}

export default Items