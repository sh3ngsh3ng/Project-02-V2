import React from "react"

export default function NavBar(props) {
    return (
        <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <button className="btn btn-primary" onClick={props.login}>Login</button>
                </div>
            </nav>
        </React.Fragment>
    )
}