import react, {useState, createContext, dispatch} from "react";
import carrito from "./carrito"
export const CartContext = createContext();

export const Cartprovider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [counteritems, setCountersItems] = useState(0);

    const addCart = (objeto, cantidad) => {
      console.log("CDAD", cantidad)
      const newCart = new carrito(
        objeto.id, 
        cantidad,
        objeto.title,
        objeto.price,
        objeto.image
        
      );
      let indice = cart.findIndex((carro) => carro.id === newCart.id);
      if (indice !== -1) {
        cart[indice].quantity += cantidad;
        setCart(cart);
      }else {
        newCart.quantity = cantidad;
        cart.push(newCart);
        setCart(cart);
      }
      console.log("cart:", cart)
       
      setCountersItems( counteritems + cantidad )
      console.log("COUNTER ITEMS: ", counteritems)
    };

    const  cartRemove= (producto, cantidad)=>{
      setCountersItems( counteritems - cantidad )
      let productoAEliminar = cart.find(x => x.id === producto.id)
        let carritoModificado = [...cart]
        if(cantidad > productoAEliminar.quantity){
            console.log("ERROR, NO SE PUEDE SACAR MAS DE LA CANTIDAD QUE TENES")
        } else{ 
            carritoModificado[cart.indexOf(productoAEliminar)].quantity-=cantidad;
            setCart(carritoModificado)}   
      
    }

    const cartAddOne = (producto, cantidad)=>{
      setCountersItems( counteritems + cantidad )
      let productoAEliminar = cart.find(x => x.id === producto.id)
        let carritoModificado = [...cart]
        if(cantidad > productoAEliminar.quantity){
            console.log("ERROR, NO SE PUEDE AGREGAR MAS CANTIDAD QUE LA DISPONIBLE")
        } else{ 
            carritoModificado[cart.indexOf(productoAEliminar)].quantity+=cantidad;
            setCart(carritoModificado)}   
    }

    const cartDelete = (producto)=>{
      console.log(producto)
      let productoAEliminar = cart.find(x => x.id === producto.id)
      let carritoModificado = [...cart]
      carritoModificado.splice(cart.indexOf(productoAEliminar),1) 
      setCart(carritoModificado)
      setCountersItems( counteritems - producto.quantity )
  }
  return (
    <CartContext.Provider value = {{cart, setCart, addCart, cartDelete, cartRemove, cartAddOne, counteritems }}>
        {children}
    </CartContext.Provider>)
 

};