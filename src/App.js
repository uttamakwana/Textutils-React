import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TextForm from "./components/TextForm/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Accordian from "./components/Accordian";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// We can pass javascript variable in html by => {variable_name}
// let name = "Uttam Makwana";
function App() {
  const [mode, setMode] = useState("light");
  const [blueMode, setBlueMode] = useState("blue");
  const [greenMode, setGreenMode] = useState("green");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been done", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been done", "success");
    }
  };
  const toggleMode2 = () => {
    if (blueMode === "blue") {
      setBlueMode("darkblue");
      document.body.style.backgroundColor = "darkblue";
      showAlert("DarkBlue Mode has been done", "success");
    } else {
      setBlueMode("blue");
      document.body.style.backgroundColor = "blue";
      showAlert("Blue Mode has been done", "success");
    }
  };
  const toggleMode3 = () => {
    if (greenMode === "green") {
      setGreenMode("lightgreen");
      document.body.style.backgroundColor = "lightgreen";
      showAlert("Green Mode has been done", "success");
    } else {
      setGreenMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("Lightgreen Mode has been done");
    }
  };
  return (
    <BrowserRouter basename="/Textutils-react">
      <Routes>
        {/* Here all the components will be visible in web page */}
        <Route
          exact
          path="/"
          element={
            <>
              {/* Creating Navbar in components folder */}
              <Navbar
                title="TextUtils"
                mode={mode}
                blueMode={blueMode}
                greenMode={greenMode}
                toggleMode={toggleMode}
                toggleMode2={toggleMode2}
                toggleMode3={toggleMode3}
              />
              {/* Shows Alert Message in switch and in button */}
              <Alert alert={alert} />
              <TextForm
                heading="Analyze the Text"
                mode={mode}
                showAlert={showAlert}
              />
            </>
          }
        />
        {/* Creating Main Textform in which we are taking inputs */}
        {/* <TextForm heading="Analyze the Text" mode={mode} showAlert={showAlert}/> */}

        {/* Creating About section for more content */}
        {/* <Accordian /> */}
        <Route
          exact
          path="/about"
          element={
            <>
              <Navbar
                title="TextUtils"
                mode={mode}
                blueMode={blueMode}
                greenMode={greenMode}
                toggleMode={toggleMode}
                toggleMode2={toggleMode2}
                toggleMode3={toggleMode3}
              />
              <Alert alert={alert} />
              {/* <TextForm heading="Analyze the Text" mode={mode} showAlert={showAlert}/> */}
              <Accordian />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
