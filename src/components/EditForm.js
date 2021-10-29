import React from 'react'


export default function EditForm(props) {
    let levelObj = props.levelObj(props.data, props.currentQuestion.level)
    let selectedTopic = props.currentQuestion.topic


    return (

        <React.Fragment>
            <div class="edit-form">
                {/* LevelDropdown */}
                <div className="mb-1 edit-form-div">
                    <label class="edit-form-label">Level: </label>
                    <select value={props.currentQuestion.level}
                        class="edit-level-dropdown"
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
                <div className="mb-1 edit-form-div">
                    <label class="edit-form-label">Grade: </label>
                    {levelObj.grade.map(function (grade) {
                        return (
                            <React.Fragment>
                                <input type="radio"
                                    class = "edit-grade-btn"
                                    checked={props.currentQuestion.grade == grade}
                                    value={grade}
                                    disabled
                                />
                                <span class="edit-grade-label">{grade}</span>
                            </React.Fragment>
                        )
                    })}
                </div>

                {/* SubjectBtn */}
                <div className="mb-1 edit-form-div">
                    <label class="edit-form-label">Subject: </label>
                    {levelObj.subjects.map(function (subject) {
                        return (
                            <button type="button"
                                key={subject}
                                className={`edit-subject-btn btn btn-outline-primary 
                                ${props.currentQuestion.subject == subject.toLowerCase() ? "active" : "disabled"}`}
                            >
                                {subject}
                            </button>
                        )

                    })}
                </div>

                {/* TopicsDropdown */}
                <div className="mb-1 edit-form-div">
                    <label class="edit-form-label">Topic: </label>
                    <span className="badge bg-light edit-form-topic">{props.currentQuestion.topic}</span>
                </div>

                {/* Question Prompt Text */}
                <div className="mb-1 edit-form-div">
                    <div className="input-group">
                        <span className="input-group-text" >
                            <span class="edit-form-label">Question Prompt:</span>
                            </span>
                        <textarea className="form-control edit-input-field"
                                name="modifiedPrompt"
                                defaultValue={props.currentQuestion.prompt}
                                onChange={props.updatingQuestion}
                        >
                        </textarea>
                    </div>
                </div>

                {/* Answer Text */}
                <div className="mb-1 edit-form-div">
                    <div className="input-group">
                        <span className="input-group-text">
                            <span class="edit-form-label">
                                Answer: 
                            </span>
                        </span>
                        <textarea className="form-control edit-input-field"
                        name="modifiedAnswer" 
                        defaultValue={props.currentQuestion.suggested_answer}
                        onChange={props.updatingQuestion}
                        >
                        </textarea>
                    </div>
                </div>
                {/* Delete and Update Btns */}
                <div class="edit-form-btns-div">
                <button class="delete-btn" onClick={async () => {
                                                    await props.deleteQuestion()
                                                    props.reloadQuestions()
                                                    }}>Delete</button>
                <button class="update-btn" onClick={async () => {
                                                await props.updateQuestion()
                                                props.reloadQuestions()
                                                }}
                                                >Update</button>
                </div>
            </div>

        </React.Fragment>


    )

}
