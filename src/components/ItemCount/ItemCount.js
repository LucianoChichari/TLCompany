import React from 'react';
import {Container,Row, Button, Card} from "react-bootstrap";
import { Items } from '../Items/Items';

const ItemCount = () => {
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
          
          <Button onClick={onAdd} disabled={counter >= Items.stock} className="btn btn-outline-secondary border-0" >+</Button>
          <Button onClick={onRemove}  disabled={counter <= 0} className="btn btn-outline-secondary border-0">-</Button>
        </Row>
        </Container>
    )
}

export default ItemCount