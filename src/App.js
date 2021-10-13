import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import FilterForm from "./components/FilterForm"
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FilterForm />
    </React.Fragment>
  );
}

export default App;
