import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import QuestionPage from "./components/QuestionPage"
import LandingPage from "./components/LandingPage"
import QuestionManagement from "./components/QuestionManagement"
import AnimatedLetterV1 from "./components/AnimatedLetterV1"
import axios from "axios"
import {motion} from "framer-motion"
import "./App.css"
import AdvancedSearchForm from "./components/AdvancedSearchForm"
import SearchForm from "./components/SearchForm"
import AlertNotif from "./components/AlertNotif"

export default class App extends React.Component {
  state = {
    'data': [],
    'active': "landingpage",
    'selectedLevel': "",
    'selectedGrade': "",
    'selectedSubject': "",
    'selectedTopic': "",
    'searchResults': [],
    'revealAnswer': false,
    'selectedQuestionId': "",
    'advancedSearch': false,
    'advancedSearchField': "level",
    'advancedSearchInput': "",
    'savedQuestion': [],
    'savingQuestion': null,
    'savedSuccess': null
  }



  // API url
  url = "https://3000-amber-puma-hs6a6gy9.ws-us25.gitpod.io/"

  // (API) Call event handler to search questions in SearchForm
  searchQuestions = async () => {
    let response = await axios.get(this.url + "search/" + `${this.state.selectedLevel}`, {
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

  // event handler to search questions in AdvancedSearchForm
  advancedSearch = async () => {
    let response = await axios.get(this.url + "search/advanced/" + `${this.state.advancedSearchField}`, {
      params: {
        'keywords': this.state.advancedSearchInput
      }
    })
    console.log("function called")
    console.log(response.data)
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

  // event handler to reset the fields if selectedLevel changes
  resetSearchFields = () => {
    this.setState({
      'selectedGrade': "",
      'selectedSubject': "",
      'selectedTopic': ""
    })
  }

  // event handler to change page to questionmanagement
  changeToQuestionManagement = () => {
    this.setState({
      'active': "questionmanage"
    })
  }


  // recursive function to find object of selected level
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

  // function for AnimatedLettersV1 (list rendering of strings)
  animateLettersV1 = (string) => {
    let arrayOfLetters = Array.from(string)
    return (
      arrayOfLetters.map(function(letter, i) {
        return(
          <AnimatedLetterV1 letter={letter} delay={i}/>
        )
      })
    )
  }

  // conditional rendering of answer based on state
  // id used as parameter to check. else all cards will reveal answer
  questionAnswer = (answer, id) => {
    if (this.state.revealAnswer && (id == this.state.selectedQuestionId)) {
      return (
        <motion.div animate={{
                      opacity: 1
                    }}
                    initial = {{
                      opacity: 0
                    }}
                    transition= {{
                      duration: 1
                    }}
        
        >Answer: {answer}</motion.div>
      )
    } else {
      return null
    }
  }

  // event handler to reveal function
  revealAnswer = (evt) => {
    this.setState({
      selectedQuestionId: evt.target.value,
      revealAnswer: !this.state.revealAnswer
    })
  }

  // function to display date in DD/MM/YY
  displayDate = (date) => {
    if (date !== undefined) {
      let editedDate = date.slice(0, 9)
      let dateArray = editedDate.split("-")
      let dateDisplay = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0]
      return dateDisplay
    } else {
      return "Unknown"
    }
  }

  // event handler to change SearchForm to AdvancedSearchForm
  changeSearchForm = () => {
    this.setState({
      "advancedSearch": !this.state.advancedSearch,
      'searchResults': []
    })
  }


  // event handler to remove question cards (deleting from array)
  removeQuestionCard = (questionToDelete) => {
    let indexToRemove = this.state.searchResults.findIndex(question => question._id == questionToDelete._id)
  
    let clonedSearchResults = [
      ...this.state.searchResults.slice(0, indexToRemove),
      ...this.state.searchResults.slice(indexToRemove + 1)
    ]

    this.setState({
      'searchResults': clonedSearchResults
    })
  }


  // function to close AlertNotif after set amount of time
  closeAlertNotif = () => {
    setTimeout(function () {
        this.setState({
            'savingQuestion': null,
            'savedSuccess': null
        })
    }.bind(this), 2500)
  }


  // alertnotif function when question is saved or unsaved
  savingQuestionNotif = () => {
    if (this.state.savingQuestion == true) {
      return (
        <AlertNotif message="Selected! Click 'Confirm' to save the questions"
                        submitCheck = {true}
        />
      )
    } else if (this.state.savingQuestion == false) {
        return (
          <AlertNotif message="Unselected! Select questions to save." 
                        submitCheck = {false} />
        )
    } else if (this.state.savedSuccess == true) {
      return (
        <AlertNotif message="Question has been saved successfully!"
                      submitCheck = {true}
                      icon={<i class="bi bi-check-circle success-submit-icon"></i>}
        />
      )
    }
  }


  // event handler for when the like button is clicked
  clickThumb = (question) => {
    if (!this.state.savedQuestion.includes(question._id)) {
      let cloned = this.state.savedQuestion.slice()
      cloned.push(question._id)
      this.setState({
        'savedQuestion': cloned,
        'savingQuestion': true
      })
      this.savingQuestionNotif()
      this.closeAlertNotif()

    } else if (this.state.savedQuestion.includes(question._id)) {
      let indexToDelete = this.state.savedQuestion.findIndex(id => question._id == id)
      let clonedArray = [
        ...this.state.savedQuestion.slice(0, indexToDelete),
        ...this.state.savedQuestion.slice(indexToDelete + 1)
      ]
      this.setState({
        'savedQuestion': clonedArray,
        'savingQuestion': false
      })
      this.savingQuestionNotif()
      this.closeAlertNotif()
    }
  }

  // conditional rendering of submit button for saved questions
  confirmUpdateBtn = () => {
    if (this.state.savedQuestion.length !== 0) {
      return(
        <div id="confirm-btn-div">
              <button type="button" 
              className="btn btn-warning confirm-btn" 
              onClick = {this.confirmUpdate}
              >Confirm</button>
        </div>
      )
    } else {
      return null
    }
  }

  // (API) Call to update saved questions
  confirmUpdate = async () => {
    let results = await axios.patch(this.url + "savequestions", {
      'savedQuestions': this.state.savedQuestion
    })
    this.setState({
      'savedSuccess': true
    })
    this.closeAlertNotif()
    console.log(results)
  }

  // conditional rendering of search forms (SearchForm & AdvancedSearchForm)
  renderSearchForm = () => {
    if (this.state.advancedSearch) {
      return <AdvancedSearchForm changeSearchForm ={this.changeSearchForm}
                                  updateFormField = {this.updateFormField}
                                  advancedSearchInput = {this.state.advancedSearchInput}
                                  advancedSearchField = {this.state.advancedSearchField}
                                  advancedSearch = {this.advancedSearch}
                                />
    } else {
      return <SearchForm data={this.state.data} 
                          selectedLevel = {this.state.selectedLevel}
                          levelObj = {this.findLevelObj}
                          selectSubject = {this.selectSubject}
                          selectedSubject = {this.state.selectedSubject}
                          selectedGrade = {this.state.selectedGrade}
                          selectTopic = {this.selectTopic}
                          searchQuestions = {this.searchQuestions}
                          updateFormField = {this.updateFormField}
                          changeSearchForm ={this.changeSearchForm}
                          advancedSearch ={this.state.advancedSearch}
                          resetSearchFields = {this.resetSearchFields}

                          />
    }
  }



  // function for conditional rendering of pages (LandingPage & QuestionPage & QuestionManagementPage)
  renderContent() {
    if (this.state.active === "landingpage") {
      return(
        <LandingPage changePage={this.changeToQuestionPage} 
                      animateLetters={this.animateLettersV1}/>
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
                      questionAnswer = {this.questionAnswer}
                      revealAnswer = {this.revealAnswer}
                      displayDate = {this.displayDate}
                      changeSearchForm = {this.changeSearchForm}
                      renderSearchForm = {this.renderSearchForm}
                      removeQuestionCard = {this.removeQuestionCard}
                      clickThumb = {this.clickThumb}
                      savedQuestion = {this.state.savedQuestion}
                      savingQuestionNotif = {this.savingQuestionNotif}
                      confirmUpdateBtn = {this.confirmUpdateBtn}
                      />
      )
    } else if (this.state.active === "questionmanage") {
      return (
        <QuestionManagement levelObj = {this.findLevelObj}
                            editDone = {this.editDone}
                            changePage = {this.changeToLandingPage}

                            removeQuestionCard = {this.removeQuestionCard}
                            clickThumb = {this.clickThumb}
                            savedQuestion = {this.state.savedQuestion}
                            revealAnswer = {this.revealAnswer}
                            questionAnswer = {this.questionAnswer}
                            displayDate = {this.displayDate}
        
        />
      )
    }
  }


  render () {
    return (
      <React.Fragment>
        <div id="full-page">
        <NavBar login={this.changeToQuestionManagement}/>
        <div id="question-management-div">
          {this.renderContent()}
        </div>
        </div>
      </React.Fragment>
    )
  }

}
