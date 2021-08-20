//Destinado a mostrar informacion breve del producto que el usuario clickeara para acceder a los detalles
import React,{ useState} from "react";
import {Button, Card, Container, Row,} from "react-bootstrap";

export function Items({items}){
    let [count, setCount] = useState(0);

    const onAdd=()=>{
      setCount(count=count+1);
    }
    
    const onRemove=()=>{
      setCount(count=count-1);
    }
      return (
          <div>
          <Card style={{ width: "18rem", margin:"3rem"}}>
            <Card.Body>
            <Card.Title>{items.nombre}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              {items.descripcion}
              </Card.Subtitle>
              <Card.Text>
              ${items.precio}
              </Card.Text>
              <Container>
                <Row className="justify-content-around">
                <Button onClick={onAdd} disabled={count >= items.stock} className="btn btn-outline-secondary border-0">+</Button>
                  <Card.Text>
                    {count}
                  </Card.Text>
                  <Button onClick={onRemove}  disabled={count <= 0} className="btn btn-outline-secondary border-0">-</Button>
                </Row>
              </Container>
              <Container>
                <Row className="justify-content-center mt-3">
                <Button >Agregar al carrito</Button>
                </Row>
              </Container>
              
            </Card.Body>
          </Card>
        </div>
      )
}