import React from 'react'

export default function SearchBtn (props) {
    return (
        <button type="button" 
        className="btn search-btn"
        onClick={props.searchQuestions}
        >Search</button>
    )

}