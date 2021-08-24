import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemList } from "../Items/ItemList";


function ItemListContainer() {
    const [items, setItems] = useState([])
    useEffect(() =>{
      fetch('https://fakestoreapi.com/products/category/electronics')
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