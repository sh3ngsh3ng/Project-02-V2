import React from "react"
import {motion} from "framer-motion"

export default function LevelBtn (props) {
    return (
        <React.Fragment>
            {props.data.map(function(obj, i) {
                return <motion.button type="button"
                            key = {obj.id} 
                            value={obj.value}
                            className="btn btn-primary"
                            name = "selectedLevel"
                            onClick = {props.updateFormField}
                            animate={{
                                x:0,
                                opacity: 1
                            }}
                            initial={{
                                x:"200%",
                                opacity: 0.5
                            }}
                            transition={{
                                type:"spring",
                                stiffness: 50,
                                delay: i * 0.03
                            }}
                            >{obj.level}</motion.button>
            })}
            
        </React.Fragment>
    )
}