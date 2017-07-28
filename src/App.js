import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Songs from './components/Songs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="DrDoctor DJ Page" />
        <div>
          <Router>
            <div>
              <div>
                <Navbar fluid>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <a href="#">DrDoctor DJ Page</a>
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Nav>
                    <NavItem>
                      <Link to="/home">Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/about">About</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/songs">Songs</Link>
                    </NavItem>
                  </Nav>
                </Navbar>
              </div>
              <Route path="/home" component={Home} />
              <Route path="/songs" component={Songs} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
