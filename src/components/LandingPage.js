import axios from "axios"
import React from "react"
import LevelBtn from "./LevelBtn"

export default class LandingPage extends React.Component {
    state = {
        'levels': []
    }

    async componentDidMount() {
        let response = await axios.get("levels.json")
        this.setState ({
            'levels': response.data
        })
    }

    render() {



        return (
            <LevelBtn levels={this.state.levels} />
        )
    }
}