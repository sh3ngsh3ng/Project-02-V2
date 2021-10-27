import React from "react"
import {motion} from "framer-motion"

export default function QuestionDisplay(props) {
    let searchResultsArray = props.searchResults
    return (
        <React.Fragment>
            {searchResultsArray.map(function(question, i) {
                return (
                   <motion.div className="card mb-3"
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
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{question.prompt}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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