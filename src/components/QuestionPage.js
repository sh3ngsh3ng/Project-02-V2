import React from "react"
import QuestionDisplay from "./QuestionDisplay"
import BackBtn from "./BackBtn"

export default function QuestionPage (props) {

    return (
        <React.Fragment>
            {props.savingQuestionNotif()}
            <div>
                {props.renderSearchForm()}
                            
            </div>
                <BackBtn changePage={props.changePage} />
                {props.confirmUpdateBtn()}
            <div>
                <QuestionDisplay searchResults = {props.searchResults}
                                    questionAnswer = {props.questionAnswer}
                                    revealAnswer ={props.revealAnswer}
                                    displayDate = {props.displayDate}
                                    removeQuestionCard = {props.removeQuestionCard}
                                    clickThumb = {props.clickThumb}
                                    savedQuestion = {props.savedQuestion}
                                />
            </div>
        </React.Fragment>
    )


}