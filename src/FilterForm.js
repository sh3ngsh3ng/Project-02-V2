import React from "react"
import Grade from "./Grade"
import TopicList from "./TopicList"

export default class FilterForm extends React.Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <Grade />
                <TopicList />
            </React.Fragment>
        )
    }


}