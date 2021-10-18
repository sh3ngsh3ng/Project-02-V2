import React from "react"
import QuestionDisplay from "./QuestionDisplay"
import SearchForm from "./SearchForm"


export default function QuestionPage (props) {

    return (
        <React.Fragment>
            <SearchForm />
            <br/>
            <QuestionDisplay />
        </React.Fragment>
    )


}