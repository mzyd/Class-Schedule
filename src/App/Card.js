import React, { Component } from 'react';
import './Card.css'


class Card extends React.Component {
  constructor (props) {
    super(props);
    console.log( "=======", props )
  }
  render () {
    return (
      <div className='card'>
        <table>
          <tbody>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
          </tbody>

        </table>
      </div>
    )
  }
}

export default Card
