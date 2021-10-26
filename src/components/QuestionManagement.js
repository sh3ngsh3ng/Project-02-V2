import axios from "axios"
import React from "react"
import AddQuestion from "./AddQuestion"
import Contributions from "./Contributions"


export default class QuestionManagement extends React.Component {
    state = {
        'data': [],
        'active': "submissions",
        "contributions": [],
        "modifyingCurrentQuestion": {},
        "modifiedPrompt": "",
        "modifiedAnswer": ""
    }

    url = "https://3000-maroon-whale-lsdblj2a.ws-us17.gitpod.io/"


    async componentDidMount() {
        let contributions = (await axios.get(this.url)).data
        let data = (await axios.get("data.json")).data
        this.setState({
            contributions, data
        })
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


    // event handler to put update to API
    updateQuestion = async () => {
        let questionId = this.state.modifyingCurrentQuestion._id
        await axios.put(this.url + "update/" + questionId, {
            "prompt": this.state.modifiedPrompt,
            "answer": this.state.modifiedAnswer
        })
        return(console.log("Question Updated"))
    }

    render() {
        return (
            <React.Fragment>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <button className={`nav-link ${this.state.active === "submissions" ? "active" : null}`}
                            onClick={(evt) => {
                                this.setActive('submissions')
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
            </React.Fragment>
        )
    }



}