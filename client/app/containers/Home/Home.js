import React, { Component } from "react";
import { Link, withRouter, Route, NavLink } from "react-router-dom";
import { Button, SplitButton, MenuItem, Form, FormControl, FormGroup, InputGroup, ControlLabel, Col, HelpBlock } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div className="background ">

        <div className="marTop150">

          <h2 className="title">A Complete BoilerPlate In React, Redux, Node Express, MongoDB, Webpack, Route, Babel</h2>
          <h3 className="title">Devloped By Rabbiii</h3>

          <div className="container">
            <div className="content">
              <NavLink to='/website' >
                <div className="content-overlay"></div>
                <img className="content-image" src="./assets/img/list.png" />
                <div className="content-details fadeIn-top">
                  <h3>Website</h3>
                  <p>View Website Template</p>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="container">
            <div className="content">
              <NavLink to='/dashboard' >
                <div className="content-overlay"></div>
                <img className="content-image" src="./assets/img/banner.png" />
                <div className="content-details fadeIn-top">
                  <h3>Dashboard</h3>
                  <p>View Dashboard Template</p>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="container">
            <div className="content">
              <NavLink to='/details' >
                <div className="content-overlay"></div>
                <img className="content-image" src="./assets/img/new.png" />
                <div className="content-details fadeIn-top">
                  <h3>Other</h3>
                  <p>List of Features</p>
                </div>
              </NavLink>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Home;
