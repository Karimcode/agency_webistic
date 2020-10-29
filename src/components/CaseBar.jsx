import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import cases from "./Data/studycases";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

const CaseBar = () => {
  let { url } = useRouteMatch(); 
  
  return(
    <ListGroup className="list">
      {cases.map(({id, name, slug}) => (
        <ListGroup.Item key={id}>
          <Link to={`${url}/${slug}-study-case`}>{name}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
    
/*     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 */
  )
}

export default CaseBar;





