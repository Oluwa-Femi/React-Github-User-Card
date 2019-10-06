import React from "react";
import "./App.css";
import UserList from "./component/UserList";
import axios from "axios";
import Followers from "./component/Followers";
import {Route} from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: [],
    };
  }
  componentDidMount() {
    this.gitHubUser = axios.get("https://api.github.com/users/Oluwa-Femi");
    this.gitHubFollowers = axios.get("https://api.github.com/users/Oluwa-Femi/followers");
    Promise.all([this.gitHubUser,this.gitHubFollowers])
      .then(([userRes,followersRes]) => {
        this.setState({
          user: { ...userRes.data },
          followers: [...followersRes.data]
        });
        console.log("On the right track", this.state.followers);
      })
      .catch(err => console.log("Err! hold it", err.message));
  }
  render() {
    return (
      <div className="App">
       <Route path="/" render={(props) => <UserList {...props} user={this.state.user} /> }/>
       <Route path="/followers" render={(props) => <Followers {...props} followers={this.state.followers}/>}/>
      </div>
    );
  }
} 