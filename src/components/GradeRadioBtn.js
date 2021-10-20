import React from "react"


export default function GradeRadioBtn (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    return (
        <React.Fragment>
            <label>{levelObj.level}: </label>
            {levelObj.grade.map(function(grade){
                return (
                    <React.Fragment>
                        <input type="radio" value={grade}/>
                        <span>{grade}</span>
                    </React.Fragment>

                )
            })}
        </React.Fragment>

    )

}