import React, { useState } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemList } from "../Items/ItemList";


function ItemListContainer() {
    const [items, setItems] = useState([])
    const item = new Promise((res,rej) =>{
      setTimeout(()=>{
          res([{id:0,nombre:"Producto1",descripcion:"descripcion",precio:"200",stock:5},{id:0,nombre:"Producto2",descripcion:"Descripcion",precio:"400",stock:5}])
      },2000)
    })
  
    item.then((resultado)=>{
      setItems(resultado)
    })
    return <div>
    <Container className="justify-content-center">
      <Row>
      <ItemList items={items}></ItemList>
        </Row>
      </Container>

    </div> 
  }

export default ItemListContainer