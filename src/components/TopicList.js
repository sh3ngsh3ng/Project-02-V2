import React from "react"

export default function TopicList (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    return (
        <select>
            {/* {levelObj.topics.map(function(topic) {
                return <option>{topic}</option>
            })} */}
        </select>

    )
}