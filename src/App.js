import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ text: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1100);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "grey";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <div className="app">
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alertmsg={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About title="About TextUtils" />}
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text here"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
