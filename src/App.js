import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import QuestionPage from "./components/QuestionPageComponent"
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <QuestionPage />
    </React.Fragment>
  );
}

export default App;
