import React from "react"
import { Component } from "react";
import { Button, Form, Table } from 'react-bootstrap';

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            form: {
                name: "",
                price: "",                
            }
        }
        this.url = 'http://localhost:3000/item'
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    handleChange(event) {
        this.setState({
            "form": {
                ...this.state.form, 
                [event.target.id]: event.target.value}
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(this.url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(this.state.form),
        })
        .then(response => console.log(response))
        .then(this.refresh())
        .catch(err => console.log(err))
    }

    refresh() {
        fetch(this.url)
        .then(res => res.json())        
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                console.log(error)
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }            
        )        
    }

    componentDidMount() {
        this.refresh()
    }

    form() {
        return (
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="item name" value={this.state.form.name} type="text" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control placeholder="0" value={this.state.form.price} type="number" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit} >Add Item</Button>
            </Form>
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            console.log(error)
            return <div>Error!</div>
        } else {
            return (
                <div>
                    {this.form()}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Item</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
    
}

export default Items