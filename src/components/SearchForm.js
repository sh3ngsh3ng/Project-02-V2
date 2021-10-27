import React from "react"
import GradeRadioBtn from "./GradeRadioBtn"
import TopicList from "./TopicList"
import SubjectBtn from "./SubjectBtn"
import SearchBtn from "./SearchBtn"
import LevelBtn from "./LevelBtn"

export default function SearchForm (props) {

    const variants = {
        animate: {
            x:0,
            opacity: 1
        },
        initial: {
            x: "200%",
            opacity: 0.5
        },
        transition: {
            type: "spring",
            stiffness: 50,
        }
    }

        return (
            <React.Fragment>
                <LevelBtn data={props.data} updateFormField = {props.updateFormField}/>
                <br/>
                <GradeRadioBtn data={props.data} 
                                selectedLevel = {props.selectedLevel}
                                selectedGrade = {props.selectedGrade}
                                updateFormField = {props.updateFormField}
                                levelObj = {props.levelObj}
                                variants={variants}/>
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