import React, { Component } from 'react';
import './App.css';
import SiderBar from './App/SideBar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          title
        </header>

        <div className="sider-bar-wrap clearfix">
          <SiderBar />
        </div>

        <div className="content clearfix">
          
        </div>

        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;
