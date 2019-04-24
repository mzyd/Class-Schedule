import React, { Component } from 'react'
import './SideBar.scss';
import { Link } from "react-router-dom";
/* import Card from './Card.js' */
import Dialog from './Dialog.js'



const NameItem = ({ props }) => {
  let path = {
    pathname: `/student/${props.phone}` ,
    state: props
  }

  return (
    <li>
      <Link to={ path }>{ props.name }</Link>
    </li>
  )
}

class SiderBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogIsOpen: false,
    }
  }

  componentDidMount() {
  }

  addStudent() {
    this.setState({
      dialogIsOpen: true,
    })
  }

  render() {
    return (
      <div className="sider-bar">
        <Dialog isOpen={ this.state.dialogIsOpen } />

        <h3>
          学员列表
          <button className="add-btn" onClick={ () => { this.addStudent() } }>+</button>
        </h3>
        <ul>
          {this.props.list.map(item => (
            <NameItem props={ item } key={ item.phone } />
          ))}
        </ul>
      </div>
    )
  }
}


export default SiderBar
