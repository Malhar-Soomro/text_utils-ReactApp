import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [btnColor, setBtnColor] = useState("primary");
  const [darkMode, setDarkMode] = useState("light");
  const toggleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "rgb(9 40 73)";
      showAlert("success", "Dark Mode Enabled");
    }
    else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enabled");
    }
  }

  const [greenMode, setGreenMode] = useState("blue");
  const toggleGreenMode = () => {
    if (greenMode === "blue") {
      setGreenMode("green");
      document.body.style.backgroundColor = "#306830";
      showAlert("success", "Green Mode Enabled");
      setDarkMode("dark");
      setBtnColor("success");
    }
    else {
      setGreenMode("blue");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enabled");
      setDarkMode("light");
      setBtnColor("primary");
    }
  }
  return (
    // <Router>
    <>
      <Navbar title="TextUtils" darkMode={darkMode} toggleGreenMode={toggleGreenMode} toggleMode={toggleDarkMode} greenMode={greenMode} />
      <Alert alert={alert} />
      {/* <Switch> */}
      {/* <Route exact path="/about"> */}
      {/* <About />/ */}
      {/* </Route> */}
      {/* <Route exact path="/"> */}
      <TextForm heading="Enter text here to analyze" darkMode={darkMode} showAlert={showAlert} btnColor={btnColor} />
      {/* </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;

