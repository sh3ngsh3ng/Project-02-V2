import React from "react"


export default class QuestionManagement extends React.Component {





    render() {
        return (
            <React.Fragment>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <button class="nav-link">Submissions</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link active" >Add New</button>
                    </li>
                </ul>
            </React.Fragment>
        )
    }



}