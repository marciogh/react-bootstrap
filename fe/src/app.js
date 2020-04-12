import './app.scss';

import React from "react"
import ReactDOM from "react-dom";

import { Container, Row, Col } from "react-bootstrap"
import Main from './components/main';
import Items from './components/items';

import ProfileImg from './img/profile.jpg'
const profile_img_element = new Image()
profile_img_element.src = ProfileImg
profile_img_element.width = 200
document.getElementById('header').appendChild(profile_img_element);

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(
<Container>
    <Row>
        <Col>
            <Main />
        </Col>
    </Row>
</Container>
, wrapper) : false;