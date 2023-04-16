import {DropdownButton, Form, Image, Nav, Navbar, NavLink} from "react-bootstrap";
import {Bell, CircleFill, Gear, HouseDoor, SearchHeart} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
const NavigationBar = ({logout, isAuthenticated}) => {

    const [redirect, setRedirect] = useState(false);

    const logout_user = () => {
        logout();
        setRedirect(true);
    }};
const Links = () => (
    <Fragment>
        <li className='nav-item active'>
            <Link className='nav-link' to='/'>
                Welcome
                <span className='sr-only'>
                    (current)
                </span>
            </Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to='/login'>
                Login
            </Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to='/register'>
                Register
            </Link>
        </li>
    </Fragment>
);

const mapStateToProps = state =>
    ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavigationBar);