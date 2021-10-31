import React from 'react'

export default function BackBtn(props) {
    // note => rewrite button to be more general. Can use for Confirm update button as well.
    return (
        <div id="back-btn-div">
            <button type="button" 
            className="btn btn-secondary back-btn" 
            onClick = {props.changePage}
            >Back</button>
        </div>
    )
}