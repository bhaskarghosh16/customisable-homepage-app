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

class TGIFCard extends Component {
  


    render() {
      
      return (
        <div>
          <Row>
            <Col></Col>
            <Col>
              <Card border="success" style={{ width: "29rem" }}>
                <Card.Header><center><Container>
                TGIF Portal
                  </Container></center></Card.Header>
                <Card.Body>
                <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Employee Search
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body><EmployeeSeachComp></EmployeeSeachComp></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          My Information Page
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>LINK</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
                      
                     
                  
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
      );
    }
  }


  export default TGIFCard;