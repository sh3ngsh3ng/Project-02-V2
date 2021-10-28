import React from "react"
import EditForm from "./EditForm"
import Accordion from "react-bootstrap/Accordion"
import Badge from "react-bootstrap/Badge"
import {motion} from "framer-motion"

export default function Contributions(props) {
    let searchResultsArray = props.searchResults
    return (
        <React.Fragment>
            <Accordion defaultActiveKey="0">
                {searchResultsArray.map(function (question, i) {
                    return (
                        <motion.div animate={{x:0}}
                                    initial={{x:"-100%"}}
                                    transition={{
                                        type:"spring",
                                        stiffness:50,
                                        delay: i * 0.05
                                    }}>
                        <Accordion.Item eventKey={question._id}
                                        value={question._id}
                                        onClick={() => {
                                            props.modifyQuestion(question)
                                        }}
                                        >
                            <Accordion.Header>
                                <Badge pill bg="success">
                                    <span class="badge-text">Approved</span>
                                    </Badge>
                                <span class="question-title">{question.prompt}</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                {props.currentQuestion == {} ? null :
                                <EditForm question={question} 
                                            data={props.data}
                                            currentQuestion = {props.currentQuestion}
                                            levelObj = {props.levelObj}
                                            updatingQuestion = {props.updatingQuestion}
                                            updateQuestion = {props.updateQuestion}
                                            deleteQuestion={props.deleteQuestion}
                                            reloadQuestions={props.reloadQuestions}
                                />
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                        </motion.div>
                    )
                })}
            </Accordion>
        </React.Fragment>

            )
    }
