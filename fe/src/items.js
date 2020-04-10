import React from "react"
import { Component } from "react";

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
        this.url = 'http://localhost:3000'
    }

    componentDidMount() {
        fetch(this.url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
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
                <ul>
                    {items.map(item => (
                        <li>{item.name} {item.price}</li>
                    ))}
                </ul>
            )
        }
    }
    
}

export default Items