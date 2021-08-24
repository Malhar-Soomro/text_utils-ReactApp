import React from 'react';
import PropTypes from 'prop-types';
// import { a } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                    <span className="navbar-hrefggler-icon"></span>
                </buthrefn>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/about">About</a> */}
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <buthrefn className="btn btn-outline-success" type="submit">Search</buthrefn>
                    </form> */}

                    {/* <div className={`form-check form-switch text-${props.greenMode === "blue" ? "black" : "white"}`} style={{ "marginRight": "15px" }}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.hrefggleGreenMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable GreenMode</label>
                    </div> */}
                </div>
                <div className={`form-check form-switch text-${props.darkMode === "light" ? "black" : "white"}`} >
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div>
            </div>
        </nav >
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here"
}
export default Navbar;
