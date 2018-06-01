import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsList from "./components/ProjectsList";
import axios from "axios"

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5555/api/projects")
      .then(response => {
        this.setState({...this.state, projects: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ProjectsList projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
