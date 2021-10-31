import React from "react"
import {motion} from "framer-motion"
import 'bootstrap-icons/font/bootstrap-icons.css';

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
                                    <div className="mb-4">
                                    <span className="card-title">{question.prompt}</span>
                                    <button type="button" 
                                            key = {i + 5}
                                            className="btn-close" 
                                            aria-label="Close"
                                            onClick ={() => {
                                                props.removeQuestionCard(question)
                                            }}
                                            ></button>
                                    </div>
                                    {props.questionAnswer(question.suggested_answer, question._id)}
                                    <div class="reveal-btn-div">
                                    <button className="btn btn-primary reveal-btn" 
                                            onClick={props.revealAnswer} 
                                            value={question._id}
                                            >Answer</button>
                                    </div>
                                    <i class={`like-btn bi bi-cloud-download-fill ${props.savedQuestion.includes(question._id)? "upvote-green" : "upvote-white"}`} 
                                        onClick = {() => props.clickThumb(question)}
                                    ></i>
                                    <span className="card-text"><small className="text-muted">Date Added: {props.displayDate(question.datetime)}</small></span>
                                    
                                </div>
                            </div>
                        </div>
                    </motion.div>                   
                )
            })}


        </React.Fragment>

    )
}