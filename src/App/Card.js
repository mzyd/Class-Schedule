import React, { Component } from 'react';
import './Card.css'
import _ from 'lodash'

const RowItem = (props) => {
  let { mark, date } = props.item
  return (
    <td className={ mark ? "already" : "no-yet" }>
      <p>{ mark ? "已上课" : "未上课" }</p>
      <span>{ mark ? date : "" }</span>
    </td>
  )
}
const TheRow = (props) => {
  return (
    <tr>
      { props.items.map(item => (
        <RowItem item={ item } />
      )) }
    </tr>
  )
}

class Card extends Component {

  /* constructor (props) {
   *   super(props);
   * } */

  render () {
    let { lessons } = this.props.location.state
    let list = _.chunk(lessons, 4)
    return (
      <div className='card'>
        <table>
          <tbody>
            { list.map(item => (
              <TheRow items={ item } />
            )) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Card
