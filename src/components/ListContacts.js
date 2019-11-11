import React from 'react';
import { Container, Row, Col } from 'reactstrap';

/* eslint-disable */
function ListContact (props){
        return(
            <Container>
                <Row>
           
                {props.contacts.map((contact) =>(
                    <Col md ={4}>
                    <div key={contact.id} className='contact-list-itme'>
                        <button 
                        onClick={() => props.onDeleteContact(contact)} 
                        className='close'>&times;</button>
                        <div className='contact-avatar'
                        style={{
                            backgroundImage:`url(${contact.avatarURL})`
                        }}>
                        </div>
                        <div>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                    </div>
                    </Col>
                ))}
            
            </Row>
            <Row>
                <div className='AddMore'>
                    <a href="#">Add More</a>
                </div>
            </Row>
        </Container>
        )
}
export default ListContact;