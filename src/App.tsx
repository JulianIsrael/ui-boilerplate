import React, { Component } from 'react'
import Home from './pages/home'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit edited <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
