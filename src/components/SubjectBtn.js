import React from "react"

export default function SubjectBtn (props) {
    // find object that matches the level selected
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    return (
        <React.Fragment>
            {levelObj.subjects.map(function(subject) {
                let smallCaseValue = subject.toLowerCase()
                return (
                    <button type="button" 
                            class="btn btn-outline-primary"
                            value = {smallCaseValue}
                            name = "selectedSubject"
                            onClick = {props.updateFormField}
                            >{subject}</button>
                )
            })}

        </React.Fragment>
    )

}