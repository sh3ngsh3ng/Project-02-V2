import React from "react"

export default function LevelBtn (props) {
    return (
        <React.Fragment>
            {props.data.map(function(obj) {
                return <button type="button" 
                            value={obj.value} 
                            className="btn btn-primary"
                            onClick={props.function}
                            >{obj.level}</button>
            })}
        </React.Fragment>
    )
}