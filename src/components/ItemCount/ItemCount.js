import React from 'react';
import {Container,Row, Button, Card} from "react-bootstrap";
import './ItemCount.css';

export function ItemCount(item){
    const [counter, setCounter] = React.useState(0);
    //const {addToCart} = useContext(CartContext)
    
    const onAdd = () =>{
        setCounter(counter + 1);
    };

    const onRemove = () =>{
        setCounter(counter - 1);
    }


    return (
        <Container>
        <Row className="card">
        
          <Card.Text className="col-mt-4">
            {counter}
          </Card.Text>
          
          <Button onClick={onAdd} disabled={counter >= item.stock} className="btn btn-light btn-outline-secondary border-0" >+</Button>
          <Button onClick={onRemove}  disabled={counter <= 0} className="btn btn-light btn-outline-secondary border-0">-</Button>
          
          <Button className="btn btn-light btn-outline-secondary border-0">Agregar al carrito</Button>
                
        </Row>
        </Container>
    )
}

export default ItemCount