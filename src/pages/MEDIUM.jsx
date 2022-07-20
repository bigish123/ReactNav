import React, { Component } from 'react';

class BasicInfo extends Component {
    constructor(props) {
        super();
        this.state = {
        people: {        
    name: props.name,
    age: props.age,
    number: props.number,
    email: props.email,
 }}}
    
    render() {
    return (
        <div className="people">
            <p>Name: {this.state.people.name}</p>
            <p> Age: {this.state.people.age}</p>
            <p> Phone Number: {this.state.people.number}</p>
            <p> Email: {this.state.people.email}</p>
            </div>
        )}}
export default BasicInfo;