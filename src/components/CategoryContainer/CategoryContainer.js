import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemList } from "../Items/ItemList";
import Loader from "../Loader/Loader"
import { db } from "../../firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

function CategoryContainer({match}) {
    const [load, setLoad] = useState(true)
    const [items, setItems] = useState([])
    let id = match.params.id;

    const getproducts = async () => {
      const dataf = [];
      const q = query(collection(db, "products"), where("cat","==", id) );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataf.push({ ...doc.data(), id: doc.id });
      });
      setItems(dataf);
      setLoad(false)
    };

    useEffect(() =>{
      getproducts();
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