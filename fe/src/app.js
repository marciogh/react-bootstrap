import React from "react"
import ReactDOM from "react-dom";
import Items from "./items";

import ProfileImg from './img/profile.jpg'
const profile_img_element = new Image()
profile_img_element.src = ProfileImg
profile_img_element.width = 200

document.getElementById('header').appendChild(profile_img_element);
const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Items />, wrapper) : false;