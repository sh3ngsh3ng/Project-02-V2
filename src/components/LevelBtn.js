import React from "react"

export default function LevelBtn (props) {
    return(
        <React.Fragment>
            {props.levels.map(function(obj) {
                return (
                    <React.Fragment>
                        <button type="button" className="btn btn-primary">{obj.level}</button>
                        <br/>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}