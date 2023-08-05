// import React, { useState } from "react"
// import Navbar from "./componants/navbar";
// import TextForm from "./componants/TextForm";
// import Alert from "./componants/alert";
// // import About from "./componants/about";
// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes
// // } from "react-router-dom";

// export default function App() {
//   const [mode, setMode] = useState('light')
//   const [alert, setAlert] = useState(null);

//   const showAlert = (t, m) => {
//     setAlert({
//       type: t,
//       message: m
//     },
//       setTimeout(() => {
//         setAlert(null);
//       }, 2000));
//   };

//   const toggleBtn = () => {
//     if (mode === 'dark') {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("success", "light Mode is Enable...");
//       document.title = 'textUtils - Light Mode';
//       setInterval(() => {
//         document.title = 'Light Mode';
//       }, 100)
//     }
//     else {
//       setMode('dark');
//       document.body.style.backgroundColor = 'black';
//       showAlert('success', 'Dark Mode is Enable...');
//       document.title = 'textUtils - Dark Mode';

//     }
//   }
//   return (
//     // <Router>
//     <>
//       <Navbar
//         title="TextUtils"
//         aboutText="about us"
//         mode={mode}
//         toggleMode={toggleBtn}
//       />
//       <Alert alert={alert} />
//       <TextForm heading={'Enter the text to analyze.'} mode={mode} showalert={showAlert} />
//       {/* <Routes>
//         <Route exact path="/about" element={<About mode={mode} />} />
//         <Route exact path="/" element={<TextForm heading={'Enter the text to analyze.'} mode={mode} showalert={showAlert} />} />
//       </Routes> */}
//     </>
//     // </Router>
//   );
// }

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(propes) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${propes.mode} bg-${propes.mode}`}>
                <Link className="navbar-brand" to="/">{propes.title}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{propes.aboutText}</Link>
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
