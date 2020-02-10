import React, { Component } from 'react'
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




class Todo extends Component {

    constructor(props) {
        super(props)

        this.input = React.createRef()
        this.state = {
            list: [],
        }
    }

    addTask = () => {

        const Items = {
            id: uuid.v4(),
            value: this.input.current.value,
            Date: new Date().toUTCString()
        };

        if (localStorage.getItem('list') == null) {
            const list = []
            list.push(Items);
            localStorage.setItem("list", JSON.stringify(list))
        }
        else {
            const list = JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list", JSON.stringify(list))
        }
        this.setState({
            list: JSON.parse(localStorage.getItem('list'))
        });
    }

    componentDidMount() {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if (list == null) {
            return false
        }
        else {
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list);
        }
    }

    deleteItem = (event) => {

        let index = event.target.getAttribute('data-key')
        let listValue = JSON.parse(localStorage.getItem('list'));
        listValue.splice(index, 1)
        this.setState({ list: listValue });
        localStorage.setItem('list', JSON.stringify(listValue))
    }



    render() {
        return (
            <div>
                
                 <Card border="success" style={{ width: "29rem" }}>
                <Card.Header><center>Task Management</center></Card.Header>
                <Card.Body>
                <div>
                        <Form.Group controlId="formBasic">

                            <Form.Control type="text" placeholder="Task" ref={this.input} />
                            <Button variant="primary" type="submit" onClick={this.addTask}>
                            Add </Button>

                        </Form.Group>
                       
                        <ol>
                            {
                                this.state.list.map((item, index) => {
                                    return (<li key={item.id}> {item.value} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                        <Button variant="danger" value="delete" data-key={index} onClick={this.deleteItem}> Delete</Button>
                                    </li>)
                                })
                            }
                        </ol>
                    </div>
                     
                  
                </Card.Body>
              </Card>
                
                    
                
            </div>
        )
    }
}

export default Todo