import React, { Component } from "react";
import { Link, withRouter, Route, NavLink, } from "react-router-dom";
import { NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to='/' className="header-left "><img className="logo" src="/assets/img/code-surfer-logo-new.png"></img></NavLink>
                <div className="header-right marTop10">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/home'>Home</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;
