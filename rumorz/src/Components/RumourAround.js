import React from 'react';
import {Container,Row,Button,InputGroup,Form, Col} from 'react-bootstrap';
import './Styling/RumourAround.css'
function RumourAround(props) {
  return(
    <div className='RumourAround padding mt-2'>
    <Container fluid>        
      <Row className='justify-content-left padding'>      
        <div className='RumourAroundDiv padding'>
            {props.rumour}
        </div>                  
      </Row>
      <Row>
        <Col style={{textAlign:'left',padding:'5px'}}>
          <Button variant='primary' size='sm'>Upvote</Button>  &nbsp;
          <Button variant='primary' size='sm'>DownVote</Button>
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