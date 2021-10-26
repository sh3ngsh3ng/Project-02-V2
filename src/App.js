import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import QuestionPage from "./components/QuestionPage"
import LandingPage from "./components/LandingPage"
import QuestionManagement from "./components/QuestionManagement"
import axios from "axios"
import "./App.css"

export default class App extends React.Component {
  state = {
    'data': [],
    'active': "landingpage",
    'selectedLevel': "",
    'selectedGrade': "",
    'selectedSubject': "",
    'selectedTopic': "",
    'searchResults': []
  }


  // API url
  url = "https://3000-olive-rooster-dsty3hak.ws-us17.gitpod.io/"

  // event handler to search questions in searchForm
  searchQuestions = async () => {
    // API call
    let response = await axios.get(this.url + `${this.state.selectedLevel}`, {
      params: {
        "grade": `${this.state.selectedGrade}`,
        "subject": `${this.state.selectedSubject}`,
        "topic": `${this.state.selectedTopic}`
      }
    })
    // store results (array) in state
    this.setState({
      'searchResults': response.data
    })
  }

  
  async componentDidMount() {
    // fetch data.json on loa
    let response = await axios.get("data.json")
    this.setState ({
      'data': response.data
    })

  }

  // event handler to change page from landing to question page + set state for selectedLevel)
  changeToQuestionPage = async (evt) => {
    this.setState({
      'active': "questionpage",
      'selectedLevel': evt.target.value,
    })
  }

  // event handler to change page from question to landing page + reset all states
  changeToLandingPage = () => {
    this.setState({
      'active': 'landingpage',
      'selectedLevel': "",
      'selectedSubject': "",
      'selectedTopic': ""
    })
  }

  // event handler to questionmanagement
  changeToQuestionManagement = () => {
    this.setState({
      'active': "questionmanage"
    })
  }


  // recursion function to find object of selected level
  findLevelObj = (array, level) => {
    if (array.length === 1) {
      return array[0]
    } else {
      if (array[0].value === level) {
        return array[0]
      } else {
        return this.findLevelObj(array.slice(1), level)
      }
    }
  }

  // update form field
  updateFormField = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }


  // function for conditional rendering of pages (landing & question)
  renderContent() {
    if (this.state.active === "landingpage") {
      return(
        <LandingPage data={this.state.data} 
                      changePage={this.changeToQuestionPage}/>
      )
    } else if (this.state.active === "questionpage") {
      return (
        <QuestionPage data={this.state.data} 
                      selectedLevel={this.state.selectedLevel}
                      changePage={this.changeToLandingPage}
                      selectSubject = {this.selectSubject}
                      selectedSubject = {this.state.selectedSubject}
                      selectedGrade = {this.state.selectedGrade}
                      selectTopic = {this.selectTopic}
                      levelObj = {this.findLevelObj}
                      searchQuestions = {this.searchQuestions}
                      updateFormField = {this.updateFormField}
                      searchResults = {this.state.searchResults}
                      />
      )
    } else if (this.state.active === "questionmanage") {
      return (
        <QuestionManagement />
      )
    }
  }


  render () {
    return (
      <React.Fragment>
        <NavBar login={this.changeToQuestionManagement}/>
        {this.renderContent()}
      </React.Fragment>
    )
  }

}
