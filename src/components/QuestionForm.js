import React from 'react'
import axios from "axios"


export default class QuestionForm extends React.Component {
    state = {
        "data": [],
        "levelObj": {},
        "submitLevel": "",
        "submitGrade":"",
        "submitSubject": "",
        "submitTopic": "",
        "submitPrompt": "",
        "submitAnswer": ""
    }


    baseState = {
        "levelObj": {},
        "submitLevel": "",
        "submitGrade":"",
        "submitSubject": "",
        "submitTopic": "",
        "submitPrompt": "",
        "submitAnswer": ""
    }

    resetState = () => {
        this.setState({
            ...this.baseState
        })
    }

    // API
    url = "https://3000-olive-rooster-dsty3hak.ws-us17.gitpod.io/"

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }


    // select subject handler 
    selectLevel = (evt) => {
        this.resetState()
        let levelObj = this.props.levelObj(this.state.data, evt.target.value)
        this.setState({
            levelObj
        })
        this.updateFormField(evt)
    }


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
                                name = "submitGrade"
                                value = {grade}
                                checked = {this.state.submitGrade == grade}
                                onChange = {this.updateFormField}
                        />
                        <span>{grade}</span>
                    </React.Fragment>
                )
            }

            return (
                <React.Fragment>
                    <label className="form-label">Grade: </label>
                    {/* Grade List Rendering (map can't use due to closure) */}
                    {gradeJSX}
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
                            className="btn btn-outline-primary"
                            value={subject.toLowerCase()}
                            name="submitSubject"
                            onClick = {this.updateFormField}
                    
                    >{subject}</button>
                )
            }
            return (
                <React.Fragment>
                    <label className="form-label">Subject:</label>
                    {subjectJSX}
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
            for(let topic of topics) {
                topicsJSX.push(<option value={topic}
                        >{topic}</option>)
            }
            return (
                <React.Fragment>
                    <label className="form-label">Topics: </label>
                    <select name="submitTopic"
                            onChange = {this.updateFormField}>
                        <option value="" selected disabled>Please Choose a Topic</option>
                        {topicsJSX}
                    </select>
                </React.Fragment>
            )
        } else {
            return null
        }
    }

    // conditional rendering of ....

    render() {
        return (
            <React.Fragment>
                    <button onClick={this.resetState}>Reset</button>
                    {/* Form Title */}
                    <h1>Submit Question</h1>

                    {/* Level Input */}
                    <div className="mb-3">
                        <label className="form-label">Level: </label>
                        <select name="submitLevel" 
                                onChange={this.selectLevel}>
                        <option value="" selected disabled>Please Select a Level</option>
                        {this.state.data.map(function(obj) {
                            return (
                                <option value = {obj.value}
                                >{obj.level}</option>
                            )
                        })}
                        </select>
                    </div>

                    {/* Grade Input */}
                    <div className="mb-3">
                        {this.renderGrade()}
                    </div>

                    {/* Subject Input */}
                    <div className="mb-3">
                        {this.renderSubjects()}
                    </div>

                    {/* Topic Input */}
                    <div>
                        {this.renderTopics()}
                    </div>

                    {/* Question Prompt */}
                    <div>
                        <label>Question Prompt:</label>
                    </div>

                    {/* Suggested Answer */}
                    <div>
                        <label>Suggested Answer:</label>
                    </div>

            </React.Fragment>
        )
    }



}