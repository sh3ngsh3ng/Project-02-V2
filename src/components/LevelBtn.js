import React from "react"

export default function LevelBtn (props) {
    return (
        <React.Fragment>
            {props.data.map(function(obj) {
                return <button type="button"
                            key = {obj.id} 
                            value={obj.value}
                            className="btn btn-primary"
                            name = "selectedLevel"
                            onClick = {props.updateFormField}
                            >{obj.level}</button>
            })}
            
        </React.Fragment>
    )
}