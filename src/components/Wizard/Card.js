import React from 'react';
import { Card } from 'react-bootstrap';

export const CardProduct = ({ img, title, text, selected }) => (
  <Card
    className={[selected ? 'selectedCard' : '', 'clickable', 'selectableCard']}
  >
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
);
