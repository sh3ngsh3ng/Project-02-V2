import React from "react"

export default function TopicList (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)
    let selectedSubject = props.selectedSubject



    if (selectedSubject === "") {
        return (
            <select class="search-topic-dropdown">
                <option>Please Choose a Subject</option>
            </select>
        )
    } else {
        return (
            <select class="search-topic-dropdown"
                    onChange={props.updateFormField} 
                    name ="selectedTopic">
                <option value="">Please Choose a Topic</option>
                {levelObj[selectedSubject].map(function(topic) {
                    let smallCaseValue = topic.toLowerCase()
                    return <option value = {smallCaseValue}
                                    key = {topic}
                    >{topic}</option>
                })}
            </select>
        )
    }

}