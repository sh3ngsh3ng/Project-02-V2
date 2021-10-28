import React from 'react'
import {motion} from "framer-motion"

export default function AnimatedLetterV1 (props) {

    return (
        <React.Fragment>
            <motion.span
            class = "front-page-letters" 
            animate = {{
                opacity: 1
            }}
            initial = {{
                opacity: 0
            }}
            transition = {{
                type:"spring",
                delay: props.delay * 0.08
            }}
            >
                {props.letter}
            </motion.span>
        </React.Fragment>
    )
} 