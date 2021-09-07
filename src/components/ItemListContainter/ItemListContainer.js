import React, { useState, useEffect, useContext } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemList } from "../Items/ItemList";
import {CartContext} from '../Context/context';

function ItemListContainer() {
    const {tuvieja} = useContext(CartContext);
    const [items, setItems] = useState([])

    useEffect(() =>{
      
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setItems(data))
    },[])
    return <div>
    <Container className="justify-content-center">
      <Row>
      <ItemList items={items}></ItemList>
        </Row>
      </Container>

    </div> 
  }

export default ItemListContainer