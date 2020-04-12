import React from "react"
import { Component } from "react";
import Clock from 'react-digital-clock';
import Items from './items'

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{background: "black"}}>
                    <Clock />
                </div>
                <Items />
            </div>
        )
    }
    
}

export default Main