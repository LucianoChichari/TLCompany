import React, {useState, useEffect, useContext} from 'react';
import {Container,Row, Button, Card} from "react-bootstrap";
import './ItemCount.css';
import {Link} from "react-router-dom";


export function ItemCount({onAdd}){
    const [counter, setCounter] = React.useState(0);
    
    
    const [load, setLoad] = useState(true)

    const Increment = () =>{
        setCounter(counter + 1);
    };

    const Decrement = () =>{
        setCounter(counter - 1);
    }

    const onAddCall = () =>{
        onAdd(counter)
        setLoad(false)
        
        
    }
    
    

    return (
        <Container>
        <Row className="card">
        
          <Card.Text className="col-mt-4">
            {counter}
          </Card.Text>
          
          <Button onClick={Increment} disabled={counter >= 20} className="btn btn-light btn-outline-secondary border-0" >+</Button>
          <Button onClick={Decrement}  disabled={counter <= 0} className="btn btn-light btn-outline-secondary border-0">-</Button>

          {load? <Button onClick={onAddCall} className="btn btn-light btn-outline-secondary border-0">Agregar al carrito</Button>:
                  <Link to="/cart" className="btn btn-light btn-outline-secondary border-0">Terminar Compra</Link>}
          
                
        </Row>
        </Container>
    )
}

export default ItemCount