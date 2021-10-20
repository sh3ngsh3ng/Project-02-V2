import React from "react"

export default function TopicList (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)
    let selectedSubject = props.selectedSubject
    let subArray = levelObj[selectedSubject]

    return (
        <select>
            {/* {subArray.map(function(topic) {
                return <option>{topic}</option>
            })} */}
        </select>

    )
}