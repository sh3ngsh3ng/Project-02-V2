import React from "react"
import QuestionDisplay from "./QuestionDisplay"
import SearchForm from "./SearchForm"
import BackBtn from "./BackBtn"
import QuestionForm from "./QuestionForm"


export default function QuestionPage (props) {

    return (
        <React.Fragment>
            <SearchForm data={props.data} 
                        selectedLevel = {props.selectedLevel}
                        levelObj = {props.levelObj}
                        selectSubject = {props.selectSubject}
                        selectedSubject = {props.selectedSubject}
                        selectedGrade = {props.selectedGrade}
                        selectTopic = {props.selectTopic}
                        searchQuestions = {props.searchQuestions}
                        updateFormField = {props.updateFormField}
                        />
            <BackBtn changePage={props.changePage} />
            <br/>
            <QuestionForm levelObj={props.levelObj}
                          />
            <br/>
            <QuestionDisplay searchResults = {props.searchResults}/>
        </React.Fragment>
    )


}