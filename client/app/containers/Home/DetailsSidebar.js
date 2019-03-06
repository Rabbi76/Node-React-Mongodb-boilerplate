import React, { Component } from "react";
import { Link, withRouter, Route, NavLink, } from "react-router-dom";


class Sidebar extends Component {
    render() {
        return (
            <div className="detailsSidenav">
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/dashboard' > Dashboard </NavLink>
                <NavLink to='/work' >Work</NavLink>
                <NavLink to='/home'>Circle</NavLink>
                <NavLink to='/home'>Balance</NavLink>
                <NavLink to='/home'>Account </NavLink>
                <NavLink to='/home'>Image</NavLink>
                <NavLink to='/home'>Reader Mode</NavLink>
                <NavLink to='/home'>card travel</NavLink>
                <NavLink to='/home'>Shopping cart</NavLink>
                <NavLink to='/home'>Settings</NavLink>

            </div>
        );
    }
}

export default Sidebar;
