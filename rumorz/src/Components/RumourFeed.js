import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Styling/RumourFeed.css'
import RumourAround from './RumourAround';
function RumourFeed() {
  return(
    <Container className='RumourFeed padding'>
      <Row >
        <RumourAround rumour = {"You can hear rumors. But you can't know them."}/>
      </Row>
      <Row >
      <RumourAround rumour = {"Do you remember that rumor in school"}/>
      </Row>
    </Container>
  );
}
 
export default RumourFeed;