import React from "react"
import LevelBtn from "./LevelBtn"

export default function LandingPage (props) {
    return (
        <React.Fragment>
            <LevelBtn data={props.data} function={props.function}/>
        </React.Fragment>

    )
}