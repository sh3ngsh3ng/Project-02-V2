import React from "react"
import QuestionDisplay from "./QuestionDisplay"
import SearchForm from "./SearchForm"
import BackBtn from "./BackBtn"


export default function QuestionPage (props) {

    return (
        <React.Fragment>
            <div>
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
                            
            </div>
                <BackBtn changePage={props.changePage} />
            <div>
                <QuestionDisplay searchResults = {props.searchResults}/>
            </div>
        </React.Fragment>
    )


}