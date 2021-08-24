import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemDetail } from "./ItemDetail";
function ItemDetailContainer({match}){
    const [items2, setItems] = useState([])
    let id = match.params.id;

    useEffect(()=>{
        let requestOptions = {
            method:"GET",
            redirect:"follow"
        };
                fetch("https://fakestoreapi.com/products/"+id, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setItems(result)
                });
                  
    },[])

    return <ItemDetail items={items2}></ItemDetail>


}

export default ItemDetailContainer

