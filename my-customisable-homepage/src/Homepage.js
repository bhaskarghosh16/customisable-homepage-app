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
import TGIFCard from "./components/TGIFCard";
import FSCard from "./components/FSCard";
import Todo from "./components/Todo"


class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <center><h3>My HomePage</h3></center>
        <hr/>
        <Container>
        <Row>
          <Col><TGIFCard></TGIFCard></Col>
          <Col></Col>
          <Col><Todo></Todo></Col>
      </Row>
      <Row>
          <Col></Col>
          <Col></Col>
          <Col><FSCard></FSCard></Col>
      </Row>
      </Container>
      </Container>
        </div>
        
    );
  }
}




export default Homepage;
