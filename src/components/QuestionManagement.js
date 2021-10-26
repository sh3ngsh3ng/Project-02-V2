import axios from "axios"
import React from "react"
import AddQuestion from "./AddQuestion"
import Contributions from "./Contributions"


export default class QuestionManagement extends React.Component {
    state = {
        'data': [],
        'active': "submissions",
        "contributions": [],
        "modifyingCurrentQuestion": {}

    }

    url = "https://3000-olive-rooster-dsty3hak.ws-us17.gitpod.io/"


    async componentDidMount() {
        let contributions = (await axios.get(this.url)).data
        let data = (await axios.get("data.json")).data
        this.setState({
            contributions, data
        })
    }


    renderContent() {
        if (this.state.active == "addnew") {
            return(
                // Form to addnew
                <AddQuestion levelObj = {this.props.levelObj}/>
            )
        } else if (this.state.active == "submissions") {
            // List of Contributed questions
            return (
                <Contributions 
                searchResults={this.state.contributions}
                data = {this.state.data}
                modifyQuestion = {this.modifyingQuestion}
                currentQuestion = {this.state.modifyingCurrentQuestion}
                levelObj = {this.props.levelObj}
                />
            )
        }
    }


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
                        <button className= {`nav-link ${this.state.active === "addnew" ? "active" : null}`} 
                                onClick ={(evt) => {
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