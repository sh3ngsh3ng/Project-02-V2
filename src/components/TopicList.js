import React from "react"

export default function TopicList (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)
    let selectedSubject = props.selectedSubject



    if (selectedSubject === "") {
        return (
            <select>
                <option>Please Choose a Subject</option>
            </select>
        )
    } else {
        return (
            <select>
                {levelObj[selectedSubject].map(function(topic) {
                    return <option onClick={props.selectTopic}>{topic}</option>
                })}
            </select>
        )
    }

}