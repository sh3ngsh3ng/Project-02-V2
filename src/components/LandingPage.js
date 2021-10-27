import React from "react"
import LevelBtn from "./LevelBtn"


export default function LandingPage (props) {
    return (
        <React.Fragment>
            <div>
                <button id="start-btn" onClick={props.changePage}>Find Questions</button>
            </div>
        </React.Fragment>

    )
}