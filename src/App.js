import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar"
import TopicList from "./TopicList"
import Level from "./Level"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <TopicList />
      <Level />
    </React.Fragment>
  );
}

export default App;
