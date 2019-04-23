import React, { Component } from 'react';
import './App.css';
import SiderBar from './App/SideBar.js'
import Card from './App/Card.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory()


const list = [
  {
    name: "李放假",
    already: [
      {
        class: 1,
        date: '2003-3-2',
      }
    ]
  },
  {
    name: "积分就",
    already: [
      {
        class: 1,
        date: '2003-3-2',
      }
    ]
  }

]

class App extends Component {
  render() {
    return (

      <Router history={ history }>

        <div className="App">
          <header className="App-header">
            title
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
