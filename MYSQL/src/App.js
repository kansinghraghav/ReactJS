import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import logo from "./logo.svg";

import CreateAssignment from './components/create-assignment.component'
import EditAssignment from './components/edit-assignment.component'
import AssignmentsList from './components/assignment-list.component'


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">            
              <img src={logo} width="50" height="50" alt="react" />            
            <Link to="/" className="navbar-brand">Assignments List App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Assignments</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Assignments</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={AssignmentsList} />
          <Route path="/edit/:id" component={EditAssignment} />
          <Route path="/create" component={CreateAssignment} />
        </div>
      </Router>     
    )
  }
}

export default App
