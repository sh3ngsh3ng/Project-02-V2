import React from "react"
import QuestionDisplay from "./QuestionDisplay"
import SearchForm from "./SearchForm"
import BackBtn from "./BackBtn"


export default function QuestionPage (props) {

    return (
        <React.Fragment>
            <div>
                {props.renderSearchForm()}
                            
            </div>
                <BackBtn changePage={props.changePage} />
            <div>
                <QuestionDisplay searchResults = {props.searchResults}
                                    questionAnswer = {props.questionAnswer}
                                    revealAnswer ={props.revealAnswer}
                                    displayDate = {props.displayDate}
                                    removeQuestionCard = {props.removeQuestionCard}
                                />
            </div>
        </React.Fragment>
    )


}