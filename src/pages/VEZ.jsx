import React, { Component } from 'react';

export default class BasicInfo extends Component {
  render () {
    return (
 <div>
    <p>{this.props.name}</p>
    <p>{this.props.age}</p>
    <p>{this.props.dateOfBirth}</p>
    <p>{this.props.email}</p>
</div>
    )}}