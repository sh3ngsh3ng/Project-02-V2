import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./NavBar"
import TopicList from "./TopicList"

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <TopicList />
    </React.Fragment>
  );
}

export default App;
