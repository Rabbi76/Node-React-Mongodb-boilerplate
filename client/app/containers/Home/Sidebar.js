import React, { Component } from "react";
import { Link, withRouter, Route, NavLink, } from "react-router-dom";


class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                <NavLink to='/' title="Home"><i class="material-icons">home</i></NavLink>
                <NavLink to='/dashboard' title="Dashboard"><i class="material-icons"> dashboard</i>  </NavLink>
                <NavLink to='/work' title="Workd"><i class="material-icons">work</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">supervised_user_circle</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">account_balance</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">account_box</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">image</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">chrome_reader_mode</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">card_travel</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">add_shopping_cart</i></NavLink>
                <NavLink to='/home' title="hello world"><i className="material-icons">settings</i></NavLink>

            </div>
        );
    }
}

export default Sidebar;
