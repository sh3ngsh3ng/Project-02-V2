import React from "react"
import GradeRadioBtn from "./GradeRadioBtn"
import TopicList from "./TopicList"
import SubjectBtn from "./SubjectBtn"
import SearchBtn from "./SearchBtn"
import LevelBtn from "./LevelBtn"

export default function SearchForm (props) {

    const variants = {
        animate1: {
            x:0,
            opacity: 1
        },
        initial1: {
            x: "200%",
            opacity: 0.5
        },
        transition1: {
            type: "spring",
            stiffness: 50,
        },

    }



        return (
            <React.Fragment>
                <div>
                    <div><h1>Find Questions</h1></div>
                    <div>
                        <LevelBtn data={props.data} 
                                    updateFormField = {props.updateFormField}
                                    variants={variants}
                                    selectedLevel={props.selectedLevel}
                                    />
                        </div>
                    <div>
                        <GradeRadioBtn data={props.data} 
                                        selectedLevel = {props.selectedLevel}
                                        selectedGrade = {props.selectedGrade}
                                        updateFormField = {props.updateFormField}
                                        levelObj = {props.levelObj}
                                        variants={variants}/>
                        </div>
                    <div>
                        <SubjectBtn data={props.data}
                                    selectSubject = {props.selectSubject}
                                    selectedLevel = {props.selectedLevel}
                                    updateFormField = {props.updateFormField}
                                    levelObj = {props.levelObj}
                                    variants={variants}
                                    />
                    </div>
                    <div>
                        <TopicList data={props.data}
                                    selectedLevel = {props.selectedLevel}
                                    levelObj = {props.levelObj}
                                    selectedSubject = {props.selectedSubject}
                                    updateFormField = {props.updateFormField}
                                    selectTopic = {props.selectTopic}
                                    variants = {variants}
                                    />
                    </div>
                    <SearchBtn searchQuestions = {props.searchQuestions}/>
                </div>
            </React.Fragment>
        )
}