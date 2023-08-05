import React, { useState } from "react"
import Navbar from "./componants/navbar";
import TextForm from "./componants/TextForm";
import Alert from "./componants/alert";
// import About from "./componants/about";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (t, m) => {
    setAlert({
      type: t,
      message: m
    },
      setTimeout(() => {
        setAlert(null);
      }, 2000));
  };

  const toggleBtn = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "light Mode is Enable...");
      document.title = 'textUtils - Light Mode';
      setInterval(() => {
        document.title = 'Light Mode';
      }, 100)
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('success', 'Dark Mode is Enable...');
      document.title = 'textUtils - Dark Mode';

    }
  }
  return (
    // <Router>
    <>
      <Navbar
        title="TextUtils"
        aboutText="about us"
        mode={mode}
        toggleMode={toggleBtn}
      />
      <Alert alert={alert} />
      <TextForm heading={'Enter the text to analyze.'} mode={mode} showalert={showAlert} />
      {/* <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm heading={'Enter the text to analyze.'} mode={mode} showalert={showAlert} />} />
      </Routes> */}
    </>
    // </Router>
  );
}

