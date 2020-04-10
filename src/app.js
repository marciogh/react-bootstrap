import React, { Component } from "react";
import ReactDOM from "react-dom";
import Clock from 'react-digital-clock';
import Instagram from './img/instagram.png'
const instagram_image = new Image()
instagram_image.src = Instagram
instagram_image.width = 20


const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Clock />, wrapper) : false;