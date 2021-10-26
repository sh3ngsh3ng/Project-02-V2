import React from 'react'


export default function EditForm (props) {
    let levelObj = props.levelObj(props.data, props.currentQuestion.level)

    return (
        
        <React.Fragment>
            <div>
                <div className="mb-3">
                    <label className="form-label">Level: </label>
                    <select value = {props.currentQuestion.level} 
                            className="form-control"
                            disabled>
                        {props.data.map(function(obj) {
                            return(
                                <option value = {obj.value}
                                >{obj.level}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Grade: </label>
                    {levelObj.grade.map(function(grade) {
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
                <div className="mb-3">
                    <label className="form-label">Subject: </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Topic: </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Prompt: </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Answer: </label>
                </div>

                <h1>{props.question.subject}</h1>
            </div>
        </React.Fragment>
        

    )

}