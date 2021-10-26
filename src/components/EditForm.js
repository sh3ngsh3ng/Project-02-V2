import React from 'react'


export default function EditForm(props) {
    let levelObj = props.levelObj(props.data, props.currentQuestion.level)
    let selectedTopic = props.currentQuestion.topic


    return (

        <React.Fragment>
            <div>
                {/* LevelDropdown */}
                <div className="mb-3">
                    <label className="form-label">Level: </label>
                    <select value={props.currentQuestion.level}
                        className="form-control"
                        disabled>
                        {props.data.map(function (obj) {
                            return (
                                <option value={obj.value}
                                >{obj.level}</option>
                            )
                        })}
                    </select>
                </div>
                {/* GradeRadioBtn */}
                <div className="mb-3">
                    <label className="form-label">Grade: </label>
                    {levelObj.grade.map(function (grade) {
                        return (
                            <React.Fragment>
                                <input type="radio"
                                    checked={props.currentQuestion.grade == grade}
                                    value={grade}
                                    disabled
                                />
                                <span>{grade}</span>
                            </React.Fragment>
                        )
                    })}
                </div>
                {/* SubjectBtn */}
                <div className="mb-3">
                    <label className="form-label">Subject: </label>
                    {levelObj.subjects.map(function (subject) {
                        return (
                            <button type="button"
                                key={subject}
                                className={`btn btn-outline-primary 
                                                ${props.currentQuestion.subject == subject.toLowerCase() ? "active" : "disabled"}`}
                            >
                                {subject}
                            </button>
                        )

                    })}
                </div>
                {/* TopicsDropdown */}
                <div className="mb-3">
                    <label className="form-label">Topic: </label>
                    {props.currentQuestion.topic}
                </div>

                {/* Question Prompt Text */}
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text" >Question Prompt:</span>
                        <textarea className="form-control"
                                name="modifiedPrompt"
                                defaultValue={props.currentQuestion.prompt}
                                onChange={props.updatingQuestion}
                        >
                        </textarea>
                    </div>
                </div>

                {/* Answer Text */}
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">Answer: </span>
                        <textarea className="form-control"
                        name="modifiedAnswer" 
                        defaultValue={props.currentQuestion.suggested_answer}
                        onChange={props.updatingQuestion}
                        >
                        </textarea>
                    </div>
                </div>
            </div>
            <button className="btn btn-secondary" onClick={async () => {
                                                await props.updateQuestion()
                                                props.reloadQuestions()
                                                }}
                                                >Update</button>
            <button className="btn btn-danger" onClick={async () => {
                                                await props.deleteQuestion()
                                                props.reloadQuestions()
                                                }}>Delete</button>
        </React.Fragment>


    )

}
