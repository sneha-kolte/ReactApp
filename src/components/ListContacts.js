import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


/* eslint-disable */
class ListContact extends React.Component {
    state = {
        loading: true,
        people: []
    };


  

    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/photos";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data, loading: false });

    }

    btnClick(e){
        const userId = e.value
        
        
        this.setState({
            userId
        })
    }
    

    render() {
        
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.people.map((person) => (
                            <div>
                        <Col md={4}>
                            {this.state.loading || !this.state.people.length ? (
                                <div>loading...</div>
                            ) : (
                                    <div className='contact-list-itme'>
                                        <button
                                            onClick={() => props.onDeleteContact(contact)}
                                            className='close'>&times;</button>

                                        <div className='contact-avatar'><img src={person.thumbnailUrl} /></div>
                                        <div>
                                            <p>{person.title}</p>
                                            <p>{person.designation}</p>
                                        </div>

                                    </div>

                                )}

                            
                                </Col>
                            </div>
                        ))}
                        <div className='AddMore'>
                            <Link to="/team/addmember">Add Member</Link>
                        </div>
                        <UserIdComponent name= "1" onClick={this.btnClick}/>
                        <UserIdComponent name= "2" onClick={this.btnClick}/>
                        <UserIdComponent name= "3" onClick={this.btnClick}/>
                        <UserIdComponent name= "4" onClick={this.btnClick}/>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

const UserIdComponent = (props)=> {
    return(
        <button className="btn-pagination" value ={props.name} onClick={props.onClick}></button>
    )
}

export default ListContact;
