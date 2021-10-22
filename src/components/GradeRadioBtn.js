import React from "react"


export default function GradeRadioBtn (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    return (
        <React.Fragment>
            <label>{levelObj.level}: </label>
            {levelObj.grade.map(function(grade){
                return (
                    <React.Fragment>
                        <input type="radio" 
                                name="selectedGrade" 
                                value={grade} 
                                checked={props.selectedGrade == grade}
                                onChange = {props.updateFormField}
                                />
                        <span>{grade}</span>
                    </React.Fragment>

                )
            })}
        </React.Fragment>

    )

}