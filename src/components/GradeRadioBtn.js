import React from "react"
import {motion} from "framer-motion"

export default function GradeRadioBtn (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    const variants = {
        animate: {
            x:0,
            opacity: 1
        },
        initial: {
            x: "200%",
            opacity: 0.5
        },
        transition: {
            type: "spring",
            stiffness: 50,
        }
    }

    return (
        <React.Fragment>
            <label>{levelObj.level}: </label>
            {levelObj.grade.map(function(grade){
                return (
                    <React.Fragment>
                        <motion.input type="radio" 
                                name="selectedGrade" 
                                value={grade} 
                                checked={props.selectedGrade == grade}
                                onChange = {props.updateFormField}
                                variants = {variants}
                                animate = "animate"
                                initial = "initial"
                                transition = "transition"
                                />
                        <motion.span variants={variants}
                                        animate ="animate"
                                        initial = "initial"
                                        transiition = "transition"
                        >{grade}</motion.span>
                    </React.Fragment>

                )
            })}
        </React.Fragment>

    )

}