import React from 'react'
import axios from "axios"
import { motion } from "framer-motion"
import AlertNotif from "./AlertNotif"

export default class AddQuestion extends React.Component {
    state = {
        "data": [],
        "levelObj": {},
        "submitLevel": "",
        "submitGrade": "",
        "submitSubject": "",
        "submitTopic": "",
        "submitPrompt": "",
        "submitAnswer": "",
        "submitSuccess": "",
    }

    // baseState & resetState function to reset states
    baseState = {
        "levelObj": {},
        "submitLevel": "",
        "submitGrade": "",
        "submitSubject": "",
        "submitTopic": "",
        "submitPrompt": "",
        "submitAnswer": "",
    }

    resetState = () => {
        this.setState({
            ...this.baseState
        })
    }

    variants = {
        animate1: {
            opacity: 1
        },
        initial1: {
            opacity: 0
        },
        transition1: {
            type: "tween",
            duration: 1.5
        },
        trannsition2: {
            type: "tween",
            duration: 1
        }
    }

    // API URL
    url = "https://3000-crimson-rat-mjdeddj3.ws-us18.gitpod.io/"

    // event handler to update state
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    // select level event handler 
    selectLevel = (evt) => {
        this.resetState()
        let levelObj = this.props.levelObj(this.state.data, evt.target.value)
        this.setState({
            levelObj
        })
        this.updateFormField(evt)
    }

    // select subject event handler 
    selectSubject = (evt) => {
        let newDefaultTopic = this.state.levelObj[evt.target.value][0].toLowerCase()
        this.setState({
            'submitTopic': newDefaultTopic,
            [evt.target.name]: evt.target.value
        })
    }

    // fetch data.json upon component mount
    async componentDidMount() {
        let response = await axios.get("data.json")
        this.setState({
            'data': response.data
        })
    }

    // conditional rendering of grade function
    renderGrade = () => {
        if (this.state.submitLevel !== "") {
            let gradeJSX = []
            for (let grade of this.state.levelObj.grade) {
                gradeJSX.push(
                    <React.Fragment>
                        <input type="radio"
                            class="add-grade-btn"
                            name="submitGrade"
                            value={grade}
                            checked={this.state.submitGrade == grade}
                            onChange={this.updateFormField}
                        />
                        <span class="add-grade-label">{grade}</span>
                    </React.Fragment>
                )
            }

            return (
                <React.Fragment>
                    <motion.div variants={this.variants}
                        animate="animate1"
                        initial="initial1"
                        transition={this.variants.transition2}
                    >
                        <span class="add-form-label">Grade: </span>
                        {/* Grade List Rendering (map can't use due to closure) */}
                        {gradeJSX}
                    </motion.div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }


    // conditional rendering of subjects function
    renderSubjects = () => {

        if (this.state.submitGrade !== "") {
            let subjectJSX = []
            for (let subject of this.state.levelObj.subjects) {
                subjectJSX.push(
                    <button type="button"
                        className={`btn add-subject-btn
                        ${this.state.submitSubject == (subject.toLowerCase()) ? "btn-primary" : "btn-outline-primary"}
                        `}
                        value={subject.toLowerCase()}
                        name="submitSubject"
                        onClick={this.selectSubject}

                    >{subject}</button>
                )
            }
            return (
                <React.Fragment>
                    <motion.div variants={this.variants}
                        animate="animate1"
                        initial="initial1"
                        transition={this.variants.transition2}
                    >
                        <span class="add-form-label">Subject:</span>
                        {subjectJSX}
                    </motion.div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }

    // conditional rendering of topics function
    renderTopics = () => {
        if (this.state.submitSubject !== "") {
            let topicsJSX = []
            let subjectChosen = this.state.submitSubject
            let topics = this.state.levelObj[subjectChosen.toLowerCase()]
            // to insert JSX into array
            for (let topic of topics) {
                let topicSmallCase = topic.toLowerCase()
                topicsJSX.push(<option value={topicSmallCase}
                >{topic}</option>)
            }

            return (
                <React.Fragment>
                    <motion.div variants={this.variants}
                        animate="animate1"
                        initial="initial1"
                        transition={this.variants.transition2}
                    >
                        <span class="add-form-label">Topics: </span>
                        <select name="submitTopic"
                            class="add-form-topic-dropdown"
                            onChange={this.updateFormField}
                            value={this.state.submitTopic}
                        >
                            <option value="" selected disabled>Please Choose a Topic</option>
                            {topicsJSX}
                        </select>
                    </motion.div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }


    // conditional rendering of question prompt and suggested answer function
    renderQnA = () => {
        if (this.state.submitTopic !== "") {
            return (
                <React.Fragment>
                    <motion.div className="input-group mb-2"
                        variants={this.variants}
                        animate="animate1"
                        initial="initial1"
                        transition={this.variants.transition2}
                    >
                        <span className="input-group-text">
                            <span class="add-form-label">Question Prompt:</span>
                        </span>
                        <textarea className="form-control"
                            aria-label="With textarea"
                            name="submitPrompt"
                            onChange={this.updateFormField}
                            value={this.state.submitPrompt}
                        ></textarea>
                    </motion.div>
                    <motion.div className="input-group"
                        variants={this.variants}
                        animate="animate1"
                        initial="initial1"
                        transition={this.variants.transition1}
                    >
                        <span className="input-group-text">
                            <span class="add-form-label">Suggested Answer:</span>
                        </span>
                        <textarea className="form-control"
                            aria-label="With textarea"
                            name="submitAnswer"
                            onChange={this.updateFormField}
                            value={this.state.submitAnswer}
                        ></textarea>
                    </motion.div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }

    // conditional rendering of submit and reset button
    renderBtns = () => {
        if (this.state.submitPrompt && this.state.submitAnswer !== "") {
            return (
                <React.Fragment>
                    <div id="add-form-btns-div">
                        {/* Reset Button Temp*/}
                        <button id="add-new-reset-btn" onClick={this.resetState}>Clear</button>
                        {/* Submit Question */}
                        <button id="add-new-submit-btn" onClick={async () => {
                            await this.submitNewQuestion()
                            this.resetState()
                        }}
                        >Submit</button>
                    </div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }


    // (API) submit new question
    submitNewQuestion = async () => {
        let newQuestion = await axios.post(this.url + `addquestion`, {
            "level": this.state.submitLevel,
            "grade": this.state.submitGrade,
            "subject": this.state.submitSubject,
            "topic": this.state.submitTopic,
            "prompt": this.state.submitPrompt,
            "answer": this.state.submitAnswer
        })
        console.log("Question Added")
        this.setState({
            "submitSuccess": true
        })
    }


    // function to close AlertNotif after set amount of time
    closeAlertNotif = () => {
        setTimeout(function () {
            this.setState({
                "submitSuccess": ""
            })
        }.bind(this), 5000)
    }


    // conditional rendering of AlertNotif
    submitNotif = () => {
        if (this.state.submitSuccess == true) {
            this.closeAlertNotif()
            return (
                <AlertNotif message="Submitted Successfully! Thank You for your contributions!"
                    submitCheck={this.state.submitSuccess}
                    icon={<i class="bi bi-check-circle"></i>}
                />
            )
        }
        
    }

    render() {
        if (this.state.submitSuccess == true) {
            return (
                <React.Fragment>
                    {this.submitNotif()}
                    <div id="addnew-form">
                        {/* Form Title */}
                        <div id="addnew-title-div">
                            <h1 id="addnew-title">Submit Question</h1>
                        </div>
                        {/* Level Input */}
                        <motion.div className="mb-3"
                            variants={this.variants}
                            animate="animate1"
                            initial="initial1"
                            transition={this.variants.transition1}
                        >
                            <span class="add-form-label">Level: </span>
                            <select name="submitLevel"
                                id="add-level-dropdown"
                                onChange={this.selectLevel}
                                value={this.state.submitLevel}
                            >
                                <option value="" selected disabled>Please Select a Level</option>
                                {this.state.data.map(function (obj) {
                                    return (
                                        <option value={obj.value}
                                        >{obj.level}</option>
                                    )
                                })}
                            </select>
                        </motion.div>

                        {/* Grade Input */}
                        <div className="mb-3">
                            {this.renderGrade()}
                        </div>

                        {/* Subject Input */}
                        <div className="mb-3">
                            {this.renderSubjects()}
                        </div>

                        {/* Topic Input */}
                        <div className="mb-3">
                            {this.renderTopics()}
                        </div>

                        {/* Question Prompt & Suggested Answer*/}
                        <div className="mb-3">
                            {this.renderQnA()}
                        </div>

                        <div>
                            {this.renderBtns()}
                        </div>


                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div id="addnew-form">
                        {/* Form Title */}
                        <div id="addnew-title-div">
                            <h1 id="addnew-title">Submit Question</h1>
                        </div>
                        {/* Level Input */}
                        <motion.div className="mb-3"
                            variants={this.variants}
                            animate="animate1"
                            initial="initial1"
                            transition={this.variants.transition1}
                        >
                            <span class="add-form-label">Level: </span>
                            <select name="submitLevel"
                                id="add-level-dropdown"
                                onChange={this.selectLevel}
                                value={this.state.submitLevel}
                            >
                                <option value="" selected disabled>Please Select a Level</option>
                                {this.state.data.map(function (obj) {
                                    return (
                                        <option value={obj.value}
                                        >{obj.level}</option>
                                    )
                                })}
                            </select>
                        </motion.div>

                        {/* Grade Input */}
                        <div className="mb-3">
                            {this.renderGrade()}
                        </div>

                        {/* Subject Input */}
                        <div className="mb-3">
                            {this.renderSubjects()}
                        </div>

                        {/* Topic Input */}
                        <div className="mb-3">
                            {this.renderTopics()}
                        </div>

                        {/* Question Prompt & Suggested Answer*/}
                        <div className="mb-3">
                            {this.renderQnA()}
                        </div>

                        <div>
                            {this.renderBtns()}
                        </div>


                    </div>
                </React.Fragment>
            )

        }
    }



}