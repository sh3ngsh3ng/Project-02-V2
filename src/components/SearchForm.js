import React from "react"
import GradeRadioBtn from "./GradeRadioBtn"
import TopicList from "./TopicList"
import SubjectBtn from "./SubjectBtn"

export default function SearchForm (props) {
        return (
            <React.Fragment>
                <GradeRadioBtn data={props.data} 
                                selectedLevel = {props.selectedLevel}
                                levelObj = {props.levelObj}/>
                <br/>
                <TopicList data={props.data}/>
                <br/>
                <SubjectBtn data={props.data}/>
            </React.Fragment>
        )
}