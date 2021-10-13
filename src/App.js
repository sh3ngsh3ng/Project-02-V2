import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar"
import FilterForm from "./FilterForm"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FilterForm />
    </React.Fragment>
  );
}

export default App;
