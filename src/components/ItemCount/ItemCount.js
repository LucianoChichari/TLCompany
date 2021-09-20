import React, {useState, useEffect, useContext} from 'react';
import {Container,Row, Button, Card} from "react-bootstrap";
import './ItemCount.css';
import {Link} from "react-router-dom";
import { CartContext } from "../Context/context"

export function ItemCount({item, onAdd}){
    const [counter, setCounter] = React.useState(0);
    const {addCart} = useContext(CartContext)
    
    const [load, setLoad] = useState(true)

    const Increment = () =>{
        setCounter(counter + 1);
    };

    const Decrement = () =>{
        setCounter(counter - 1);
    };

    const onAddCart = () => {
        setLoad(false)
        addCart(item,counter)

    };

    

    return (
        <Container>
        <Row className="card">
        
          <Card.Text className="col-mt-4">
            {counter}
          </Card.Text>
          
          <Button onClick={Increment} disabled={counter >= item.stock} className="btn btn-light btn-outline-secondary border-0" >+</Button>
          <Button onClick={Decrement}  disabled={counter <= 0} className="btn btn-light btn-outline-secondary border-0">-</Button>

          {load? <Button onClick={onAddCart} className="btn btn-light btn-outline-secondary border-0">Agregar al carrito</Button>:
                  <Link to="/cart" className="btn btn-light btn-outline-secondary border-0">Terminar Compra</Link>}
          
                
        </Row>
        </Container>
    )
}

export default ItemCount