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
import EmployeeSeachComp from "./EmployeeSearchComp";

class FSCard extends Component {
  


    render() {
      
      return (
        <div>
          <Row>
            <Col></Col>
            <Col>
              <Card border="success" style={{ width: "29rem" }}>
                <Card.Header><center><Container>
                FreshService
                  </Container></center></Card.Header>
                <Card.Body>
                
                     
                  
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
      );
    }
  }


  export default FSCard;