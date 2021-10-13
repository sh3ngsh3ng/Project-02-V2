import React from "react"

export default class TopicList extends React.Component {
    state = {
        "topics": ['Math', 'Science', 'English', 'Mother Tongue']
    }




    render() {
        return (
            <select>
                {this.state.topics.map(function(topic) {
                    return <option>{topic}</option>
                })}
            </select>

        )
    }
}