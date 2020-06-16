import React from 'react';
import {Container,Row,Button,InputGroup,Form, Col} from 'react-bootstrap';
import './Styling/RumourAround.css'
function RumourAround() {
  return(
    <div className='RumourAround padding'>
    <Container fluid>        
      <Row className='justify-content-left padding'>      
        <div className='RumourAroundDiv padding'>
            Rumour around you
        </div>                  
      </Row>
      <Row className="RumourAroundButtonRow">
        <Col style={{textAlign:'left',padding:'5px'}}>
          <Button variant='primary' size='sm'>Upvote</Button>  &nbsp;
          <Button variant='primary' size='sm'>DownVote</Button>
        </Col>
        
        <Col style={{textAlign:'left',padding:'5px'}}>
        </Col>

        <Col style={{textAlign:'right',padding:'5px'}}>
          <Button variant='primary' size='sm'>Status</Button> &nbsp;
          <Button variant='primary' size='sm'>V</Button>
        </Col>
        
      </Row>     
       
    </Container>
    </div>
  );
}
 
export default RumourAround;