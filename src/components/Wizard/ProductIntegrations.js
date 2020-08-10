import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { CardProduct } from './Card';

export const ProductIntegrations = ({ selectCard }) => {
  const products = [{
    id: '1',
    img: 'http://placehold.it/300x150',
    title: 'title product',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
  }, {
    id: '2',
    img: 'http://placehold.it/300x150',
    title: 'title product',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
  },{
    id: '3',
    img: 'http://placehold.it/300x150',
    title: 'title product',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
  },{
    id: '4',
    img: 'http://placehold.it/300x150',
    title: 'title product',
    text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
  }
];

  const [selectedCard, setSelected] = useState('')

  const handleSelectedCard = (selected) => {
    setSelected(selected);  
    selectCard(selected);
  }

  return (
    <>
      <Row xs={12} md={2} lg={3}>
        {products.map((product, index) => [
          <Col className="mt-2" key={index} onClick={() => handleSelectedCard(product.id)}><CardProduct {...product} selected={selectedCard === product.id ? true : false} /></Col>,
        ])}
      </Row>
    </>
  )
}
