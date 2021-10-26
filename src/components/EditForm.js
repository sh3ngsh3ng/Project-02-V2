import React from 'react'


export default function EditForm (props) {



    return (
        
        <React.Fragment>
            <div>
                <div className="mb-3">
                    <label className="form-label">Level: </label>
                    <select value = {props.currentQuestion.level}>
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