import React from "react"

export default function AdvancedBtn (props) {


    return (
        <button type="button"
                className="btn btn-danger advanced-btn"
                onClick={props.changeSearchForm}
                >
                    Advanced Search
                </button>


    )
}