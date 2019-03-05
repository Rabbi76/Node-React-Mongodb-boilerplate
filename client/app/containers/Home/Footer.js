import React, { Component } from "react";
import { Link, withRouter, Route, NavLink, } from "react-router-dom";
import { NavDropdown, MenuItem } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
               A Product of Rabbiii
            </div>
        );
    }
}

export default Footer;
