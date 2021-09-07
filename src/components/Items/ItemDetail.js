import {Card, Button} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Items.css"
import React,{useState, useContext} from "react";
import { CartContext } from '../Context/context';

export function ItemDetail({items}){
    const {addCart} = useContext(CartContext)
    const [valorinterno, setValor] = useState(0);

    const onAdd = () =>{
      console.log("ITEMS: ",items)
      setValor();
      console.log()
      

  }
  
return (
<div class="card text-center">
          <div class="card-header">
                {items.title}
          </div>

          <div class="card-body">
            
                <img className="card-img-top" src={items.image} alt="Card image cap" style={{ width: "18rem", margin:"3rem"}}/>
                <h5 class="card-title">${items.price}</h5>
                
                <ItemCount onAdd = {onAdd} item = {items} ></ItemCount>

          </div>

          <div class="card">
                  <div class="card-header">
                     Descripcion del producto
                  </div>
          <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p class="card-body">{items.description}</p>
                <footer class="blockquote-footer"><cite title="Source Title">The Lazy Co. </cite></footer>
                  </blockquote>
</div>
</div>
</div>
        
)
}