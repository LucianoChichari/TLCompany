import {Card, Button} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Items.css"
import React,{useState, useContext} from "react";
import { CartContext } from '../Context/context';

export function ItemDetail({items}){
    const {addCart} = useContext(CartContext)
    const [valorinterno, setValor] = useState(0);

    const onAdd = (value) =>{
      setValor(value);
      console.log(value)
      addCart(items, value)

    }

      return (
          
          <Card className="ProductView" style={{ width: "18rem", margin:"3rem"}}>
            <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <img className="card-img-top" src={items.image} alt="Card image cap" />
              
              <Card.Subtitle className="Precio" style={{ textAlign:"center"}}>
              ${items.price}
              </Card.Subtitle>

              <Card.Text>
                  {items.description}
              </Card.Text>           

            </Card.Body>
            <ItemCount onAdd = {onAdd} ></ItemCount>
          </Card>
        
)
}