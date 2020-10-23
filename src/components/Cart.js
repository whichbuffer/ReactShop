import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Card,Button} from 'react-bootstrap';

function Cart(props){
    return(
        <div class="roww">
            <div class="column space">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.info}
                </Card.Text>
                <Card.Text className="font">
                {props.price}
                </Card.Text>
            <Button variant="primary">Add to Basket</Button>
            </Card.Body>
        </Card>

            </div>
         
  

        </div>
    )
}

export default Cart;