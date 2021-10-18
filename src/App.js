import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import QuestionPage from "./components/QuestionPage"
import LandingPage from "./components/LandingPage"
import "./App.css"

export default class App extends React.Component {
  state = {
    data: [],
    active: "landingpage"
  }


  renderContent() {
    if (this.state.active === "landingpage") {
      return(
        <LandingPage />
      )
    } else if (this.state.active === "questionpage") {
      return (
        <QuestionPage />
        
      )
    }
  }


  render () {
    return (
      <React.Fragment>
        <NavBar />
        {this.renderContent()}
      </React.Fragment>
    )
  }

}
