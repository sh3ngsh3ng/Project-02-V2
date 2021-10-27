import React from "react"
import {motion} from "framer-motion"

export default function NavBar(props) {
    return (
        <React.Fragment>
            <motion.nav className="navbar navbar-light bg-light"
                        animate={{y:0}}
                        initial={{y:"-100%"}}
                        transition={{
                            type:"spring",
                            stiffness: 50,
                            delay: 0.02
                        }}
            >
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <button className="btn btn-primary" onClick={props.login}>Login</button>
                </div>
            </motion.nav>
        </React.Fragment>
    )
}