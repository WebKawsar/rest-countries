import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Button} from "react-bootstrap";



const Country = (props) => {

    const {flag, name, capital, population} = props.country;

    return (
            <div>
                <Container>
                    <Card style={{width: "50%", margin: "30px", border: "5px solid tomato"}}>
                        <Card.Img style={{height: "300px"}} variant="top" src={flag} />
                        <Card.Body>
                            <Card.Title style={{fontSize: "30px"}}>{name}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Capital: {capital}</ListGroupItem>
                            <ListGroupItem>Population: {population}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
    )
};

export default Country;