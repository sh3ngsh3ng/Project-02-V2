import React from "react"
import {motion} from "framer-motion"

export default function SubjectBtn (props) {
    // find object that matches the level selected
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    return (
        <React.Fragment>
            {levelObj.subjects.map(function(subject, i) {
                let smallCaseSubject = subject.toLowerCase()
                return (
                    <motion.button type="button"
                            key = {subject} 
                            className={`btn find-subject-btn
                            ${props.selectedSubject == smallCaseSubject ? "btn-success": "btn-outline-primary"}
                            `}
                            value = {smallCaseSubject}
                            name = "selectedSubject"
                            onClick = {props.updateFormField}
                            variants={props.variants}
                            animate="animate1"
                            initial="initial1"
                            transition= {{
                                type:"spring",
                                stiffness: 50,
                                delay: i * 0.03
                            }}
                            >
                                {subject}
                            </motion.button>
                )
            })}

        </React.Fragment>
    )

}