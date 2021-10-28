import React from "react"
import {motion} from "framer-motion"

export default function GradeRadioBtn (props) {
    let levelObj = props.levelObj(props.data, props.selectedLevel)

    return (
        <React.Fragment>
            <label>{levelObj.level}: </label>
            {levelObj.grade.map(function(grade, i){
                return (
                    <React.Fragment>
                        <motion.input type="radio" 
                                name="selectedGrade" 
                                value={grade} 
                                checked={props.selectedGrade == grade}
                                onChange = {props.updateFormField}
                                variants = {props.variants}
                                animate = "animate1"
                                initial = "initial1"
                                transition = {{
                                    type:"spring",
                                    stiffness: 50,
                                    delay: i * 0.03
                                }}
                                // disabled={props.selectedGrade == "" ? false: true}
                                />
                        <motion.span variants={props.variants}
                                        animate ="animate1"
                                        initial = {{
                                            x: "10000%",
                                            opacity: 0
                                        }}
                                        transition = {{
                                            delay: 0.5
                                        }}
                        >{grade}</motion.span>
                    </React.Fragment>

                )
            })}
        </React.Fragment>

    )

}