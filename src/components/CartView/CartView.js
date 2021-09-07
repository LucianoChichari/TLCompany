import { Link } from 'react-router-dom'; 
import { CartContext } from '../Context/context';
import React,{useEffect, useContext} from "react";
import CartItem from './CartItem';
const CartView = () => {

    const {cartDelete, cart, cartRemove, cartAddOne, counteritems} = useContext(CartContext)
    useEffect(()=>{
        console.log("CART", cart)
    },[])
    


    return (
        <div>
            {   counteritems!==0?
                cart.map((item)=>{
                    console.log("ITEM", item)
                    return <CartItem item = {item} cartDelete = {cartDelete} cartRemove={cartRemove} cartAddOne={cartAddOne}/>
                }):<Link className="fs-1 text-center m-5" to="/"> Carrito vacio, volver a la tienda?</Link>
            }
        </div>
    )
}

export default CartView
