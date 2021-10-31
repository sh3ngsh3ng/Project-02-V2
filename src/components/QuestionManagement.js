import axios from "axios"
import React from "react"
import AddQuestion from "./AddQuestion"
import Contributions from "./Contributions"
import BackBtn from "./BackBtn"
import AlertNotif from "./AlertNotif"


export default class QuestionManagement extends React.Component {
    state = {
        'data': [],
        'active': "submissions",
        "contributions": [],
        "modifyingCurrentQuestion": {},
        "modifiedPrompt": "",
        "modifiedAnswer": "",
        "updateSuccess": null,
        "deleteSuccess": null
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


    // function to close AlertNotif after set amount of time
    closeAlertNotif = () => {
        setTimeout(function () {
            this.setState({
                "updateSuccess": null,
                "deleteSuccess": null
            })
        }.bind(this), 5000)
    }

    // conditional rendering of AlertNotif
    submitNotif = () => {
        if (this.state.updateSuccess == true) {
            this.closeAlertNotif()
            return (
                <AlertNotif message="Updated Successfully!"
                    submitCheck={this.state.updateSuccess}
                    icon={<i class="bi bi-check-circle success-submit-icon"></i>}
                />
            )
        } else if (this.state.deleteSuccess == true) {
            this.closeAlertNotif()
            return (
                <AlertNotif message="Deleted Successfully!"
                    submitCheck={this.state.deleteSuccess}
                    icon={<i class="bi bi-check-circle success-submit-icon"></i>}
                />
            )
        } else if (this.state.updateSuccess == false) {
            this.closeAlertNotif()
            return (
                <AlertNotif message="Update unsuccessful. No fields were modified"
                            submitCheck={this.state.updateSuccess}
                            icon = {<i class="bi bi-exclamation-circle update-failed-icon"></i>}
                />
            )
        }
    }

    // conditional rendering of Submissions Page and AddNew Page
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
                    modifiedPrompt = {this.state.modifiedPrompt}
                    modifiedAnswer = {this.state.modifiedAnswer}
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
            "modifyingCurrentQuestion": questionObj,
            "modifiedPrompt": questionObj.prompt,
            "modifiedAnswer": questionObj.suggested_answer
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
        // Case where there is no modification
        if ((this.state.modifiedAnswer == this.state.modifyingCurrentQuestion.suggested_answer) && (this.state.modifiedPrompt == this.state.modifyingCurrentQuestion.prompt)) {
            this.setState({
                'updateSuccess': false
            })
        } else {
            let questionId = this.state.modifyingCurrentQuestion._id
            await axios.put(this.url + "update/" + questionId, {
                "prompt": this.state.modifiedPrompt,
                "answer": this.state.modifiedAnswer
            })
            this.setState({
                'updateSuccess': true
            })
            return(console.log("Question Updated"))
        }
    }

    // (API) event handler to delete question
    deleteQuestion = async () => {
        let questionId = this.state.modifyingCurrentQuestion._id
        await axios.delete(this.url + "delete/" + questionId)
        this.setState({
            'deleteSuccess': true
        })
        return(console.log("Question Deleted"))
    }


    render() {
        // version 2
        return (
            <React.Fragment>
                {this.submitNotif()}
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

    // version 1 (not the best, will cause rerendering of the whole list of questions)
    // if (this.state.updateSuccess || this.state.deleteSuccess == true) {
    //     return (
    //         <React.Fragment>
    //             {this.submitNotif()}
    //             <ul class="nav nav-tabs">
    //                 <li class="nav-item">
    //                     <button className={`nav-link ${this.state.active === "submissions" ? "active" : null}`}
    //                         onClick={(evt) => {
    //                             this.setActive('submissions')
    //                             this.fetchData()
    //                         }}
    //                     >Submissions</button>
    //                 </li>
    //                 <li class="nav-item">
    //                     <button className={`nav-link ${this.state.active === "addnew" ? "active" : null}`}
    //                         onClick={(evt) => {
    //                             this.setActive('addnew')
    //                         }}
    //                     >Add New</button>
    //                 </li>
    //             </ul>
    //             {this.renderContent()}
    //             <BackBtn changePage={this.props.changePage} />
    //         </React.Fragment>
    //     )
    // } else {
    //     return (
    //         <React.Fragment>
    //             <ul class="nav nav-tabs">
    //                 <li class="nav-item">
    //                     <button className={`nav-link ${this.state.active === "submissions" ? "active" : null}`}
    //                         onClick={(evt) => {
    //                             this.setActive('submissions')
    //                             this.fetchData()
    //                         }}
    //                     >Submissions</button>
    //                 </li>
    //                 <li class="nav-item">
    //                     <button className={`nav-link ${this.state.active === "addnew" ? "active" : null}`}
    //                         onClick={(evt) => {
    //                             this.setActive('addnew')
    //                         }}
    //                     >Add New</button>
    //                 </li>
    //             </ul>
    //             {this.renderContent()}
    //             <BackBtn changePage={this.props.changePage} />
    //         </React.Fragment>
    //     )
    // }

}