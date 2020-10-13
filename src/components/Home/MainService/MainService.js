import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import service1 from '../../../images/icons/service1.png' 
import service2 from '../../../images/icons/service2.png' 
import service3 from '../../../images/icons/service2.png' 
const MainService = () => {
    return (
        <CardDeck>
  <Card>
  <Card.Img variant="top" className="service_img" src={service1} />
    <Card.Body>
      <Card.Title>Web & Mobile design</Card.Title>
      <Card.Text>
        we carft stunning and amazing web ui.using well drafted ux to fit your 
        product.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" className="service_img" src={service2}  />
    <Card.Body>
      <Card.Title>Graphic Designer </Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" className="service_img" src={service3} />
    <Card.Body>
      <Card.Title>Web Development </Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardDeck>
    );
};

export default MainService;