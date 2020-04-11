import React from "react"
import { Component } from "react";
import { Table } from 'react-bootstrap';

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
        this.url = 'http://localhost:3000/item'
    }

    componentDidMount() {
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            console.log(error)
            return <div>Error!</div>
        } else {
            return (
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
            )
        }
    }
    
}

export default Items