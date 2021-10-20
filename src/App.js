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
    'selectedSubjects': []
  }


  // fetch data.json
  async componentDidMount() {
    let response = await axios.get("data.json")
    this.setState ({
      'data': response.data
    })
  }

  // function to change page from landing to question page + set state (level, subjects)
  changeToQuestionPage = (evt) => {
    let subjects = []
    if (this.state.selectedLevel === "pri") {
      subjects = this.state.data[0].subjects
    } else if (this.state.selectedLevel === "sec") {
      subjects = this.state.data[1].subjects
    } else {
      subjects = this.state.data[2].subjects
    }

    this.setState({
      'active': "questionpage",
      'selectedLevel': evt.target.value,
      'selectedSubjects': subjects
    })
  }



  // function to change page from question page to landing + reset states
  changeToLandingPage = () => {
    this.setState({
      'active': 'landingpage',
      'selectedLevel': "",
      'selectedSubjects': ""
    })
  }


  // conditional rendering of pages
  renderContent() {
    if (this.state.active === "landingpage") {
      return(
        <LandingPage data={this.state.data} changePage={this.changeToQuestionPage}/>
      )
    } else if (this.state.active === "questionpage") {
      return (
        <QuestionPage changePage={this.changeToLandingPage}/>
        
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
