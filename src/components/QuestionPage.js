import React from "react"
import QuestionDisplay from "./QuestionDisplay"
import SearchForm from "./SearchForm"
import BackBtn from "./BackBtn"


export default function QuestionPage (props) {

    return (
        <React.Fragment>
            <SearchForm data={props.data} 
                        selectedLevel = {props.selectedLevel}
                        levelObj = {props.levelObj}
                        />

            <BackBtn changePage={props.changePage} />
            <br/>
            <QuestionDisplay />
        </React.Fragment>
    )


}