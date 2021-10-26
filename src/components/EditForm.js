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


                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text" >Question Prompt:</span>
                        <textarea className="form-control" value={props.currentQuestion.prompt}
                        >
                        </textarea>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">Answer: </span>
                        <textarea className="form-control" value={props.currentQuestion.suggested_answer}
                        >
                        </textarea>
                    </div>
                </div>
            </div>
            <button className="btn btn-secondary">Update</button>
            <button className="btn btn-danger">Delete</button>
        </React.Fragment>


    )

}
