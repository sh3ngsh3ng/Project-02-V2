import React from "react"
import {motion} from "framer-motion"

export default function LevelBtn (props) {
    return (
        <React.Fragment>
            {props.data.map(function(obj, i) {
                return <motion.button type="button"
                            key = {obj.id} 
                            value={obj.value}
                            className={`btn search-level-btn
                            ${props.selectedLevel == obj.value ? "btn-success": "btn-outline-primary"}`}
                            name = "selectedLevel"
                            onClick = {(evt) => {
                                props.updateFormField(evt)
                                props.resetSearchFields()
                            }}
                            variants = {props.variants}
                            animate="animate1"
                            initial="initial1"
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