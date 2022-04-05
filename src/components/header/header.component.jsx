import React, {Component} from 'react'
import "./header.styles.scss"
import {init} from "ityped"



export default class Header extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { showCursor: false, strings: ["I'm here to develop expansion!" ] })
    }
    render(){
      return <div className="Header">
        <div id="myElement"></div>
        <span className="span"></span>
      </div>
    }
  }