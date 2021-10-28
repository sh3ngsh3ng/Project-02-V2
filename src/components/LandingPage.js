import React from "react"
import { motion } from "framer-motion"


export default function LandingPage(props) {
    return (
        <React.Fragment>
            <div id="landing-page">
            {/* Landing Page Text 1 */}
            <div id="page-text-1-div">
                {props.animateLetters("Practice Makes Perfect")}
            </div>
            {/* Landing Page Text 2 */}
            <div id="page-text-2-div">
                <motion.span class="front-page-letters2"
                    animate={{
                        opacity: 1
                    }}
                    initial = {{
                        opacity: 0
                    }}
                    transition= {{
                        type: "tween",
                        duration: 1.5,
                        delay: 1
                    }}
                >
                    Find More Practice Questions Here!
                </motion.span>
            </div>

            {/* Start button */}
            <div id="start-btn-div">
                <motion.button id="start-btn"
                    onClick={props.changePage}
                    animate={{ x: 0 }}
                    initial={{ x: "-100%" }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        delay: 0.05
                    }}
                >Start
                </motion.button>
            </div>
            </div>
        </React.Fragment>

    )
}