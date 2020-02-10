import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'


class EmployeeSeachComp extends React.Component {
    render() {
      return (
        <div>
        <Form>
  <Form.Group controlId="formBasic">
    <Form.Label>Name or Email Address of Employee</Form.Label>
    <Form.Control type="text" placeholder="Enter Name/Email" />
   
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </div>
          
      );
    }
  }
export default EmployeeSeachComp;