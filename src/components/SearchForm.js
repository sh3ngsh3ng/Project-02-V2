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
                <TopicList data={props.data}
                            selectedLevel = {props.selectedLevel}
                            levelObj = {props.levelObj}
                            selectedSubject = {props.selectedSubject}
                            />

                <br/>
                <SubjectBtn data={props.data}
                            selectSubject = {props.selectSubject}
                             selectedLevel = {props.selectedLevel}
                             levelObj = {props.levelObj}
                             />
                
            </React.Fragment>
        )
}