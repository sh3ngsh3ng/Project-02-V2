import React from 'react'

export default function BackBtn(props) {

    return (
        <button type="button" className="btn btn-secondary" onClick = {props.changePage}>Back</button>
    )
}