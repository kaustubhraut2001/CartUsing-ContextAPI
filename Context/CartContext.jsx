import {createContext , useState} from "react";

export const CartContext = createContext();



export const CartContextProvider = (props) => {

	const [total , setTotal] = useState(0);
	const [cart , setCart] = useState([]);

	const [quantity , Setquantity] = useState(0);

	return(
		<CartContext.Provider value={{total , setCart , cart , setTotal , quantity , Setquantity	}}>
			{props.children}
		</CartContext.Provider>
	);
}