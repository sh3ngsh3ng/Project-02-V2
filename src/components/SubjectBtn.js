import React from "react"

export default function SubjectBtn (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    return (
        <React.Fragment>
            {levelObj.subjects.map(function(subject) {
                return (
                    <button type="button" class="btn btn-outline-primary">{subject}</button>
                )
            })}

        </React.Fragment>
    )

}