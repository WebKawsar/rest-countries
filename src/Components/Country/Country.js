import React from 'react';
import { Card, ListGroup, ListGroupItem, Container} from "react-bootstrap";
import { Button as MuiBtn } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Country = (props) => {

    const {flag, name, capital, population, alpha3Code, area} = props.country;
    
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
                            {
                                props.showDetailBtn === false &&
                                <ListGroupItem>Short code name : {alpha3Code}</ListGroupItem>
                            }
                            {
                                props.showDetailBtn === false &&
                                <ListGroupItem>Area : {area}</ListGroupItem>
                            }
                            <ListGroupItem>Capital: {capital}</ListGroupItem>
                            <ListGroupItem>Population: {population}</ListGroupItem>
                        </ListGroup>
                        {
                        
                            props.showDetailBtn === true && 
                            <Card.Body>
                                    <Link to={`/country/${name}`}>Country Details Link</Link>
                                    <MuiBtn onClick={() => props.handleClick(name)} variant="contained" color="secondary">Country Details Button</MuiBtn>
                            </Card.Body>
                        }
                    </Card>
                </Container>
            </div>
    )
};

export default Country;