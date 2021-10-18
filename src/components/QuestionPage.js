import React from "react"
import GradeRadioBtn from "./GradeRadioBtn"
import TopicList from "./TopicList"
import SubjectBtn from "./SubjectBtn"
import QuestionDisplay from "./QuestionDisplay"


export default function QuestionPage () {

    return (
        <React.Fragment>
            <div className="box">
            <SubjectBtn />
            <br/>
            <GradeRadioBtn />
            <br/>
            <TopicList />
            <br/>
            <QuestionDisplay />
            </div>

        </React.Fragment>
    )


}