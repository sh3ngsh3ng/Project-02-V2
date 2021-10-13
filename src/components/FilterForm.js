import React from "react"
import Grade from "./Grade"
import TopicList from "./TopicList"
import Subject from "./Subject"


export default class FilterForm extends React.Component {
    state = {

    }

    render() {
        return (
            <React.Fragment>
                <div className="box">
                <Subject />
                <br/>
                <Grade />
                <br/>
                <TopicList />

                </div>

            </React.Fragment>
        )
    }


}