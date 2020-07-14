import React from 'react';
import {Container,Row,Button,InputGroup,Form, Col} from 'react-bootstrap';
import './Styling/CreateRumour.css'
import RumourFeed from './RumourFeed';
function CreateRumour() {
  return(
    <div className='CreateRumour padding'>
    <Container fluid>        
      <Row className='justify-content-left padding'>      
        <textarea placeholder="Spread your rumour here" cols="18" rows="8" className="CreateRumourTextArea"/>                      
      </Row>
      <Row>
        <Col style={{textAlign:'left',padding:'5px'}}>
          <Button variant='primary' size='sm'>Post Rumour</Button>
        </Col>
        <Col className='justify-content-end padding' style={{textAlign:'right',padding:'10px 5px'}}>
          <Form.Group controlId="AddRumourAnonymousFlag">
            <Form.Check type="checkbox" label="Make it anonymous" />
          </Form.Group>
        </Col>
      </Row>     
      <Row>
        <RumourFeed/>
      </Row> 
    </Container>
    </div>
  );
}
 
export default CreateRumour;