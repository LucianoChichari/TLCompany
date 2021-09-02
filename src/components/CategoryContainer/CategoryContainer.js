import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemList } from "../Items/ItemList";
import Loader from "../Loader/Loader"

function CategoryContainer({match}) {
    const [load, setLoad] = useState(true)
    const [items, setItems] = useState([])
    let id = match.params.id;
    useEffect(() =>{
      fetch('https://fakestoreapi.com/products/category/'+id)
            .then(res=>res.json())
            .then(data=>{
              setItems(data)
              setLoad(false)
            })
    },[id])
    return <div>
      
    <Container className="justify-content-center">

      <Row>

        {load?<Loader></Loader>:
          <ItemList items={items}></ItemList>
          

          }
  
        </Row>
      </Container>
              
    </div> 

  }

export default CategoryContainer