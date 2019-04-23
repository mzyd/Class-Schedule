import React, { Component } from 'react'
import './SiderBar.scss';
import { Route, Link } from "react-router-dom";
import Card from './Card.js'


const NameItem = ({ props }) => {
  console.log( "props : ", props )
  return (
    <li>
      <Link to="/student/:id">{ props.name }</Link>
    </li>
  )
}

class SiderBar extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="sider-bar">
        <h3>学员</h3>
        <ul>
          {this.props.list.map(item => (
            <NameItem props={ item } />
          ))}
        </ul>
      </div>
    )
  }
}


export default SiderBar
