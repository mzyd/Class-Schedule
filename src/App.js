import React, { Component } from 'react';
import './App.css';
import SiderBar from './App/SideBar.js'
import Card from './App/Card.js'
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888';

const history = createBrowserHistory()


const list = [
  {
    name: "李放假",
    phone: '18115465984',
    lessons: [],
  },
  {
    name: "雾霾",
    phone: '17815465984',
    lessons: [],
  },
  {
    name: "下雨",
    phone: '13415465984',
    lessons: [],
  },
]

function random() {
  let x = Math.floor( Math.random() * 10 )
  return x > 5 ? { mark: true, date: '2018-3-2' } : { mark: false, date: '' }
}

function addLesson() {
  list.forEach(item => {
    for ( let i = 0; i < 12; i++ ) {
      let x = random()
      item.lessons.push(x)
    }
  })

}

addLesson()


class App extends Component {

  /* constructor(props) {
   *   super(props)
   * } */

  componentDidMount() {

    /* axios.get('/')
     *      .then(res => {
     *        console.log( "res : ", res )
     * }) */

  }

  render() {
    return (

      <Router history={ history }>

        <div className="App">
          <header className="App-header">
          </header>

          <div className="sider-bar-wrap clearfix">
            <SiderBar list={ list } />
          </div>

          <div className="content clearfix">
            <Route path="/student/:id" component={ Card } />
          </div>

          <footer>
            footer
          </footer>
        </div>

      </Router>

    );
  }
}

export default App;
