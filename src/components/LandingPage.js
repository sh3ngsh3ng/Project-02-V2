import React from "react"
import {motion} from "framer-motion"


export default function LandingPage (props) {
    return (
        <React.Fragment>
            <div>
                <motion.button id="start-btn" 
                        onClick={props.changePage}
                        animate={{x:0}}
                        initial={{x:"-100%"}}
                        transition={{
                            type:"spring",
                            stiffness:50,
                        }}
                >Find Questions
                </motion.button>
            </div>
        </React.Fragment>

    )
}