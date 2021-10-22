import React from "react"
import GradeRadioBtn from "./GradeRadioBtn"
import TopicList from "./TopicList"
import SubjectBtn from "./SubjectBtn"
import SearchBtn from "./SearchBtn"

export default function SearchForm (props) {
        return (
            <React.Fragment>
                <GradeRadioBtn data={props.data} 
                                selectedLevel = {props.selectedLevel}
                                selectedGrade = {props.selectedGrade}
                                updateFormField = {props.updateFormField}
                                levelObj = {props.levelObj}/>
                <br/>
                <SubjectBtn data={props.data}
                            selectSubject = {props.selectSubject}
                             selectedLevel = {props.selectedLevel}
                             updateFormField = {props.updateFormField}
                             levelObj = {props.levelObj}
                             />
                <br/>
                <TopicList data={props.data}
                            selectedLevel = {props.selectedLevel}
                            levelObj = {props.levelObj}
                            selectedSubject = {props.selectedSubject}
                            updateFormField = {props.updateFormField}
                            selectTopic = {props.selectTopic}
                            />
                <SearchBtn searchQuestions = {props.searchQuestions}/>
            </React.Fragment>
        )
}