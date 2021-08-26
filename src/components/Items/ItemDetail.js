import {Card, Button} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Items.css"

export function ItemDetail({items}){

      return (
          
          <Card className="ProductView" style={{ width: "18rem", margin:"3rem"}}>
            <Card.Body>
            <Card.Title>{items.title}</Card.Title>
            <img className="card-img-top" src={items.image} alt="Card image cap" />
              
              <Card.Subtitle className="Precio" style={{ textAlign:"center"}}>
              ${items.price}
              </Card.Subtitle>

              <Card.Text>
                  {items.description}
              </Card.Text>           

            </Card.Body>
            <ItemCount></ItemCount>
          </Card>
        
)
}