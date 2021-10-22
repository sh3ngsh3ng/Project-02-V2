import React from 'react'

export default function SearchBtn (props) {
    return (
        <button type="button" 
        className="btn btn-primary"
        onClick={props.searchQuestions}
        >Search</button>
    )

}