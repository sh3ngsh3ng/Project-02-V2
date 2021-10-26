import React from "react"
import EditForm from "./EditForm"
import Accordion from "react-bootstrap/Accordion"
import Badge from "react-bootstrap/Badge"


export default function Contributions(props) {
    let searchResultsArray = props.searchResults
    return (
        <React.Fragment>
            <Accordion defaultActiveKey="0">
                {searchResultsArray.map(function (question) {
                    return (
                        <Accordion.Item eventKey={question._id}
                                        value={question._id}
                                        onClick={() => {
                                            props.modifyQuestion(question)
                                            
                                        }}
                                        >
                            <Accordion.Header>
                                <Badge pill bg="success">Approved</Badge>
                                {question.prompt}
                            </Accordion.Header>
                            <Accordion.Body>
                                <EditForm question={question} 
                                            data={props.data}
                                            currentQuestion = {props.currentQuestion}
                                />
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </React.Fragment>

            )
    }