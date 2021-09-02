import react, {useState, createContext} from "react";
import carrito from "./carrito"
export const CartContext = createContext();

export const Cartprovider = ({children}) =>{
    const [cart, setCart] = useState([]);
    function tuvieja (){
        console.log("TU VIEJA")
    }

    
    const addCart = (item, cantidad) => {
        const carritoItem = new carrito(item.id, cantidad, item.title, item.price )
        let index = cart.findIndex((c) => c.Id === carritoItem.Id);
        if (index !== -1) {
            cart[index].cantidad += cantidad;
          setCart(cart);
        } else {
            carritoItem.cantidad = cantidad;
            cart.push(carritoItem);
          setCart(cart);
        }
    
        console.log(cart)
      };

    return (
    <CartContext.Provider value = {{cart, setCart, tuvieja, addCart}}>
        {children}
    </CartContext.Provider>)
 

};