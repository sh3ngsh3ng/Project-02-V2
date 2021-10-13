import React from "react"

export default class Subject extends React.Component {
    state = {
        "subjects": ["Math", "Science", "English"]
    }

    render() {
        return (
            <React.Fragment>
                {this.state.subjects.map(function(subject) {
                    return (
                        <button type="button" class="btn btn-outline-primary">{subject}</button>
                    )
                })}

            </React.Fragment>
        )
    }


}