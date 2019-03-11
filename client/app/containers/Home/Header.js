import React, { Component } from "react";
import { Link, withRouter, Route, NavLink, } from "react-router-dom";
import { NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="header">

                {/* <NavLink to='/' className="header-left "><img className="logo" src="/assets/img/code-surfer-logo-new.png"></img></NavLink> */}
                <div className="header-left">
                    <NavLink className="header-box" to='/list'><i class="material-icons header-icon">view_list</i> List</NavLink>
                    <NavLink className="header-box" to='/add'><i class="material-icons header-icon">library_add</i> Add</NavLink>
                    <NavLink className="header-box" to='/report'><i class="material-icons header-icon">bar_chart</i> Report</NavLink>
                </div>
                <div className="header-right">
                    <NavLink className="header-box" to='/profile'><i class="material-icons header-icon">account_circle</i> Profile</NavLink>
                    <NavLink className="header-box" to='/'><i class="material-icons header-icon">power_settings_new</i> Log out</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;
