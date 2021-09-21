import React, {useContext, useState, useEffect} from "react"
import payobj from "./payobj"
import { CartContext } from "../Context/context"
import { collection, addDoc, updateDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";





const Paycom = () => {
    const {cart} = useContext(CartContext);
    const [cartItem, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [idcompra, setIdcompra] = useState("");

    useEffect(()=>{
        cart.forEach((item)=>{
            cartItem.push(
                {
                    nombre: item.nombre,
                    quantity: item.quantity,
                    precio: item.precio
                }
            )
        })

        setCart(cartItem)

        

        setTotal(cart.reduce((acc,item)=>{
            return(acc += item.quantity * item.precio)
        },0))

    },[])



    const payform = async (e)  =>{
        e.preventDefault();
        let traerform = document.getElementById("formulariopago");
        let nombre = traerform.nombre.value;
        let nrotel = traerform.nrotel.value;
        let correo = traerform.correo.value;
        let correo2 = traerform.correo2.value;

        let payobjeto = new payobj(nombre, nrotel, correo, cartItem, total);

        let obj = {
            name: payobjeto.name,
            phone: payobjeto.phone,
            email: payobjeto.email,
            items: payobjeto.items,
            total: payobjeto.total,
            time: Timestamp.fromDate(new Date())
           
        }
        console.log("OBJETO",obj)
        if(payobjeto.email !== correo2){
            alert("Los correos ingresador no coinciden")
            return;
        }
        try {
            const docRef = await addDoc(collection(db, "ventas"), 
              obj
        );
        
 
        console.log("Document written with ID: ", docRef.id);
        setIdcompra(docRef.id)
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
                
    }


    
    return (
        <div>

        <form id="formulariopago">
        <div className="form-group">
                <label for="exampleInputEmail1">Direccion de correo electronico</label>
            <input name="correo" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">No compartiremos tu correo con nadie.</small>
        </div>
        <div className="form-group form-check"></div>
        <div className="form-group">
                <label for="exampleInputEmail1">Ingrese nuevamente su correo</label>
            <input name="correo2" type="email2" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">Corroborar que este bien escrito.</small>
        </div>
        <div className="form-group form-check"></div>
        <div className="form-group">
            <label for="exampleInputPassword1">Nro. Telefono</label>
                <input name="nrotel"  className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group form-check"></div>
        <div className="form-group">
            <label for="exampleInputPassword1">Nombre completo</label>
                <input name="nombre"  className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group form-check"></div>       
            <button onClick={payform}  type="submit" className="btn btn-primary">Aceptar</button>
        </form>
        {idcompra !== "" && (
        <h3 className="fs-2">
          Gracias por su compra, su codigo de pedido es: {idcompra}
        </h3>
      )}
        </div>
    )
}

export default Paycom
