import React, { Component } from 'react'
import './SiderBar.scss';
import { Link } from "react-router-dom";
/* import Card from './Card.js' */
import Dialog from './Dialog.js'



const NameItem = ({ props }) => {
  /* console.log( "props : ", props ) */
  return (
    <li>
      <Link to="/student/:id">{ props.name }</Link>
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
            <NameItem props={ item } key={ item.name } />
          ))}
        </ul>
      </div>
    )
  }
}


export default SiderBar
