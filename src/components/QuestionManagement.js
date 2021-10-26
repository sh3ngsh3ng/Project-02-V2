import axios from "axios"
import React from "react"
import QuestionForm from "./QuestionForm"
import QuestionDisplay from "./QuestionDisplay"
import Contributions from "./Contributions"


export default class QuestionManagement extends React.Component {
    state = {
        'active': "submissions",
        "contributions": []

    }

    url = "https://3000-olive-rooster-dsty3hak.ws-us17.gitpod.io/"


    async componentDidMount() {
        let contributions = (await axios.get(this.url)).data
        this.setState({
            contributions
        })
    }


    renderContent() {
        if (this.state.active == "addnew") {
            return(
                // Form to addnew
                <QuestionForm levelObj = {this.props.levelObj}/>
            )
        } else if (this.state.active == "submissions") {
            // List of Contributed questions
            return (
                <Contributions searchResults={this.state.contributions}/>
            )
        }
    }


    setActive = (page) => {
        this.setState({
            'active': page
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