import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
export default function Navbar(propes) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${propes.mode} bg-${propes.mode}`}>
                <a className="navbar-brand" href="#">{propes.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{propes.aboutText}</a>
                        </li>
                    </ul>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={propes.toggleMode} />
                        <label class={`form-check-label text-${propes.mode === 'light' ? 'dark' : 'light'}`} for="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav >
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'TextUtils',
    aboutText: 'about'
}