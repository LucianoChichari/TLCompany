import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemList } from "../Items/ItemList";


function CategoryContainer({match}) {
    const [items, setItems] = useState([])
    let id = match.params.id;
    useEffect(() =>{
      fetch('https://fakestoreapi.com/products/category/'+id)
            .then(res=>res.json())
            .then(data=>setItems(data))
    },[id])
    return <div>
    <Container className="justify-content-center">
      <Row>
      <ItemList items={items}></ItemList>
        </Row>
      </Container>

    </div> 
  }

export default CategoryContainer