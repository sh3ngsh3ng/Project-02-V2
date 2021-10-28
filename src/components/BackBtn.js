import React from 'react'

export default function BackBtn(props) {

    return (
        <div id="back-btn-div">
            <button type="button" 
            className="btn btn-secondary back-btn" 
            onClick = {props.changePage}
            >Back</button>
        </div>
    )
}