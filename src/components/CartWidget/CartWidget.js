
import './NavBarStyle.css';
import logo from './carrito-de-compras.png';
import React,{useEffect, useContext, useState} from "react";
import {CartContext} from "../Context/context"

const CartWidget = () => {
    


    const {counteritems} = useContext(CartContext); 
    useEffect(()=>{
        console.log("COUNTER ITEMS DEL US EFECT: ",counteritems)
    })

    return (<div> 
        
            {
               counteritems!==0 && <> 
                <img src={logo} alt="Logo" width={15} height={15}/>
                <span>
                    {counteritems}
                </span>
                </>
                }

    </div>
    )}

export default CartWidget