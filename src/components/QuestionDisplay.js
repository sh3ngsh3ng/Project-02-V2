import React from "react"
import {motion} from "framer-motion"

export default function QuestionDisplay(props) {
    let searchResultsArray = props.searchResults
    return (
        <React.Fragment>
            {searchResultsArray.map(function(question, i) {
                return (
                   <motion.div className="card mb-1 question-card-div"
                                animate={{
                                    x: 0
                                }}
                                initial={{
                                    x: "-100%"
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 50,
                                    delay: i * 0.05
                                }}
                   >
                        <div>
                            <div>
                                <div className="card-body">
                                    <h5 className="card-title">{question.prompt}</h5>
                                    <p className="card-text">just some text here</p>
                                    <button className="btn btn-primary" onClick={props.revealAnswer} value={question._id}>Click</button>
                                    {props.questionAnswer(question.suggested_answer, question._id)}
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>                   
                )
            })}


        </React.Fragment>

    )
}