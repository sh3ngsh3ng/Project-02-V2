import React from "react"
import EditForm from "./EditForm"
import Accordion from "react-bootstrap/Accordion"


export default function Contributions(props) {
    let searchResultsArray = props.searchResults
    return (
        <React.Fragment>
            <Accordion defaultActiveKey="0">
                {searchResultsArray.map(function (question) {
                    
                    return (
                        <Accordion.Item eventKey={question._id}>
                            <Accordion.Header>
                                {question.prompt}
                            </Accordion.Header>
                            <Accordion.Body>
                                <EditForm question={question}/>
                                <span>Answer: {question.suggested_answer} </span>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </React.Fragment>

            )
    }
