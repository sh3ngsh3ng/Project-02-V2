import React from "react"
import {motion} from "framer-motion"

export default function GradeRadioBtn (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)

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
                                variants = {props.variants}
                                animate = "animate"
                                initial = "initial"
                                transition = "transition"
                                />
                        <motion.span variants={props.variants}
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