import axios from "axios"
import React from "react"
import AddQuestion from "./AddQuestion"
import Contributions from "./Contributions"
import BackBtn from "./BackBtn"


export default class QuestionManagement extends React.Component {
    state = {
        'data': [],
        'active': "submissions",
        "contributions": [],
        "modifyingCurrentQuestion": {},
        "modifiedPrompt": "",
        "modifiedAnswer": ""
    }

    url = "https://3000-crimson-rat-mjdeddj3.ws-us18.gitpod.io/"


    fetchData = async () => {
        let contributions = (await axios.get(this.url)).data
        let data = (await axios.get("data.json")).data
        this.setState({
            contributions, data
        })
        console.log("Data Fetched")
    }

    async componentDidMount() {
        this.fetchData()
    }


    renderContent() {
        if (this.state.active == "addnew") {
            return (
                // Form to addnew
                <AddQuestion levelObj={this.props.levelObj} />
            )
        } else if (this.state.active == "submissions") {
            // List of Contributed questions
            return (
                <Contributions
                    searchResults={this.state.contributions}
                    data={this.state.data}
                    modifyQuestion={this.modifyingQuestion}
                    currentQuestion={this.state.modifyingCurrentQuestion}
                    levelObj={this.props.levelObj}
                    renderEditForm={this.renderEditForm}
                    updatingQuestion={this.updatingQuestion}
                    updateQuestion={this.updateQuestion}
                    deleteQuestion={this.deleteQuestion}
                    reloadQuestions={this.fetchData}
                />
            )
        }
    }

    // function to set the active page to show (addnew or contributions)
    setActive = (page) => {
        this.setState({
            'active': page
        })
    }


    // event handler to set the question to modify
    modifyingQuestion = (questionObj) => {
        this.setState({
            "modifyingCurrentQuestion": questionObj
        })
    }



    // event handler to store update (prompt & answer)
    updatingQuestion = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    // (API) event handler to update question
    updateQuestion = async () => {
        let questionId = this.state.modifyingCurrentQuestion._id
        await axios.put(this.url + "update/" + questionId, {
            "prompt": this.state.modifiedPrompt,
            "answer": this.state.modifiedAnswer
        })
        return(console.log("Question Updated"))
    }

    // (API) event handler to delete question
    deleteQuestion = async () => {
        let questionId = this.state.modifyingCurrentQuestion._id
        await axios.delete(this.url + "delete/" + questionId)
        return(console.log("Question Deleted"))
    }


    render() {
        return (
            <React.Fragment>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <button className={`nav-link ${this.state.active === "submissions" ? "active" : null}`}
                            onClick={(evt) => {
                                this.setActive('submissions')
                                this.fetchData()
                            }}
                        >Submissions</button>
                    </li>
                    <li class="nav-item">
                        <button className={`nav-link ${this.state.active === "addnew" ? "active" : null}`}
                            onClick={(evt) => {
                                this.setActive('addnew')
                            }}
                        >Add New</button>
                    </li>
                </ul>
                {this.renderContent()}
                <BackBtn changePage={this.props.changePage} />
            </React.Fragment>
        )
    }



}