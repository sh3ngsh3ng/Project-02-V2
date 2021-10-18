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

  url = "https://3000-red-bovid-jbf53hi9.ws-us17.gitpod.io/"





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
