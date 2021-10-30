import React from "react"
import GradeRadioBtn from "./GradeRadioBtn"
import TopicList from "./TopicList"
import SubjectBtn from "./SubjectBtn"
import SearchBtn from "./SearchBtn"
import LevelBtn from "./LevelBtn"
import AdvancedBtn from "./AdvancedBtn"

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
                <div className="search-form mb-2">
                    <div><h1 class="search-form-title">Find Questions</h1></div>
                    <div class="search-field-div">
                        <div className="mb-2">
                            <label class="search-form-label">Level: </label>
                            <LevelBtn data={props.data} 
                                        updateFormField = {props.updateFormField}
                                        variants={variants}
                                        selectedLevel={props.selectedLevel}
                                        resetSearchFields = {props.resetSearchFields}
                                        />
                            </div>
                        <div className="mb-2">
                            <GradeRadioBtn data={props.data} 
                                            selectedLevel = {props.selectedLevel}
                                            selectedGrade = {props.selectedGrade}
                                            updateFormField = {props.updateFormField}
                                            levelObj = {props.levelObj}
                                            variants={variants}/>
                            </div>
                        <div className="mb-2">
                            <label class="search-form-label">Subject: </label>
                            <SubjectBtn data={props.data}
                                        selectSubject = {props.selectSubject}
                                        selectedSubject = {props.selectedSubject}
                                        selectedLevel = {props.selectedLevel}
                                        updateFormField = {props.updateFormField}
                                        levelObj = {props.levelObj}
                                        variants={variants}
                                        />
                        </div>
                        <div className="mb-2">
                            <label class="search-form-label">Topic: </label>
                            <TopicList data={props.data}
                                        selectedLevel = {props.selectedLevel}
                                        levelObj = {props.levelObj}
                                        selectedSubject = {props.selectedSubject}
                                        updateFormField = {props.updateFormField}
                                        selectTopic = {props.selectTopic}
                                        variants = {variants}
                                        />
                        </div>
                        <div id="search-form-btns-div">
                            <AdvancedBtn changeSearchForm={props.changeSearchForm}/>
                            <SearchBtn searchQuestions = {props.searchQuestions}/>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}