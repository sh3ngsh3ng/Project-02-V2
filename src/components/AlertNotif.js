import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {motion} from 'framer-motion'

export default function Alert(props) {

    return (
        <motion.div 
            className={`alert-notif-div alert ${props.submitCheck ? "alert-success": "alert-warning"}`} 
            role="alert"
            animate={{y:0}}
            initial={{y:"-100%"}}
            transition={{
                type:"spring",
                stiffness: 50,
                delay: 0.02
            }}
            >
                <div class="alert-notif-content">
                {props.icon}
                <span class="alert-notif-text">{props.message}</span>
                </div>
        </motion.div>
    )


}