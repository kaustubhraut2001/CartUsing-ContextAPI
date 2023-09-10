

import './App.css'
import Cart from '../Components/Cart'
import Items from '../Components/Items'
function App() {


  return (
    <>
    <Cart name="Laptop" price="50000" quantity="1"/>
    <Cart name="Mobile" price="20000" quantity="1"/>
    <Cart name="Tablet" price="10000" quantity="1"/>
    <Items/>
    </>
  )
}

export default App
