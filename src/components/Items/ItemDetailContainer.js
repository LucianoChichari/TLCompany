import React, { useState, useEffect } from "react";
import {Container,Row} from "react-bootstrap"
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";



function ItemDetailContainer({match}){
    const [items2, setItems] = useState([])
    let iditem = match.params.id;

    const getdetail = async () => {
        const dataf = [];
        const docRef = doc(db, "products", iditem);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            dataf.push({ ...docSnap.data(), id: iditem });
            setItems(dataf);
            console.log("adfadf")
          } else {
            // doc.data() will be undefined in this case
            console.log("F MANO!");

        };
    }
        useEffect(() => {
          getdetail();
        }, []);

    return(
        <div>
            {items2.map((itemi)=>{
                return <ItemDetail items={itemi}></ItemDetail>
            })}
        </div>
    )
     // <ItemDetail items={items2}></ItemDetail>
        

}

export default ItemDetailContainer

