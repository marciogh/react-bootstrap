import React from "react"
import ReactDOM from "react-dom";
import Items from "./items";
import Instagram from './img/instagram.png'
const instagram_image = new Image()
instagram_image.src = Instagram
instagram_image.width = 20

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Items />, wrapper) : false;