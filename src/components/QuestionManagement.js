import React from "react"
import QuestionForm from "./QuestionForm"


export default class QuestionManagement extends React.Component {
    state = {
        'active': "submissions",

    }





    renderContent() {
        if (this.state.active == "addnew") {
            return(
                <QuestionForm levelObj = {this.props.levelObj}/>
            )
        } else if (this.state.active == "submissions") {
            return ("submissions")
        }
    }


    setActive = (page) => {
        this.setState({
            'active': page
        })
    }

    render() {
        return (
            <React.Fragment>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <button className={`nav-link ${this.state.active === "submissions" ? "active" : null}`} 
                                onClick={(evt) => {
                                    this.setActive('submissions')
                                }}
                        >Submissions</button>
                    </li>
                    <li class="nav-item">
                        <button className= {`nav-link ${this.state.active === "addnew" ? "active" : null}`} 
                                onClick ={(evt) => {
                                    this.setActive('addnew')
                                }}
                        >Add New</button>
                    </li>
                </ul>
                {this.renderContent()}
            </React.Fragment>
        )
    }



}