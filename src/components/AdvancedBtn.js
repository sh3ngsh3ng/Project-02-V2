import React from "react"

export default function AdvancedBtn (props) {


    return (
        <button type="button"
                className="btn advanced-btn"
                onClick={props.changeSearchForm}
                >
                    Advanced
                </button>


    )
}