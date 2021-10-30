import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {motion} from 'framer-motion'

export default function Alert(props) {

    return (
        <motion.div 
            className={`alert-notif alert ${props.submitCheck ? "alert-success": "alert-warning"}`} 
            role="alert"
            animate={{y:0}}
            initial={{y:"-100%"}}
            transition={{
                type:"spring",
                stiffness: 50,
                delay: 0.02
            }}
            >
                {/* <i class="bi bi-check-circle"></i> */}
                {props.icon}
                {props.message}
        </motion.div>
    )


}