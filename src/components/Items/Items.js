//Destinado a mostrar informacion breve del producto que el usuario clickeara para acceder a los detalles
import {Card, Button} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Items.css"

export function Items({items}){

      return (
          
          <Card className="ProductView" style={{ width: "18rem", margin:"3rem"}}>

            <Card.Body>
                  <Card.Title class="col-2 text-truncate" style={{ width: "15rem"}}>{items.title}</Card.Title>
                        <Link to={`/detail/${items.id}`}>
                        <img className="card-img-top" src={items.image} alt="Card image cap" style={{ width: "15rem", height: "18rem"}}/>
                        </Link>

                        <Card.Subtitle className="Precio" style={{ textAlign:"center"}}>  
                                Precio: ${items.price}
                        </Card.Subtitle>

            </Card.Body>

            <ItemCount></ItemCount>

          </Card>
        
)
}

