import React from 'react';
import './App.css';
import UserList from './component/UserList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="App">
        This is my app!
        <UserList/>
      </div>
    )
  }
} 