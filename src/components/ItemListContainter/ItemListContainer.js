import React, { useState, useEffect, useContext } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemList } from "../Items/ItemList";
import {CartContext} from '../Context/context';
import { db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";
function ItemListContainer() {
    const {tuvieja} = useContext(CartContext);
    const [items, setItems] = useState([])

    const getproducts = async () => {
      const dataf = [];
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataf.push({ ...doc.data(), id: doc.id });
      });
      setItems(dataf);
      
    };

    useEffect(() =>{
      getproducts();
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