import React from 'react';
import {Container,Row} from 'react-bootstrap';
import CreateRumour from './CreateRumour';
import RumourAround from './RumourAround';
import './Styling/MainComponent.css'
function MainComponent() {
  return(
    <Container fluid style={{paddingLeft:'20px',paddingTop:'5px'}}>
      <Row >
        <CreateRumour/>
      </Row>
      
    </Container>
  );
}
 
export default MainComponent;