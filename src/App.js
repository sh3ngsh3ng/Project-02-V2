import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import QuestionPage from "./components/QuestionPage"
import LandingPage from "./components/LandingPage"
import axios from "axios"
import "./App.css"

export default class App extends React.Component {
  state = {
    'data': [],
    'active': "landingpage",
    'selectedLevel': "",
  
  }

  async componentDidMount() {
    let response = await axios.get("data.json")
    this.setState ({
      'data': response.data
    })
  }

  changePage = (evt) => {
    this.setState({
      'active': "questionpage",
      'selectedLevel': evt.target.value
    })
  }

  // conditional rendering of pages
  renderContent() {
    if (this.state.active === "landingpage") {
      return(
        <LandingPage data={this.state.data} function={this.changePage}/>
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
