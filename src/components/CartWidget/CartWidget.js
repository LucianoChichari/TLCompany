
import './NavBarStyle.css';
import logo from './carrito-de-compras.png';
import React,{useEffect, useContext, useState} from "react";
import {CartContext} from "../Context/context"
import { Link } from "react-router-dom";

const CartWidget = () => {
    


    const {counteritems} = useContext(CartContext); 
    useEffect(()=>{
        console.log("COUNTER ITEMS DEL US EFECT: ",counteritems)
    })

    return (<div> 
        
            {
               counteritems!==0 && <> 
               <Link to="/cart">
                <a href="#" className="float">
                <i className="my-float"></i>
                <i> <img src={logo} alt="Logo" width={15} height={15}/>
                <h5 className="cambiarmargentop" >
                    {counteritems}
                </h5> </i>

                </a>
                </Link>
                </>
                }
                

    </div>
    )}

export default CartWidget

