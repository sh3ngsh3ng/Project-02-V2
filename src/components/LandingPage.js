import axios from "axios"
import React from "react"

export default class LandingPage extends React.Component {
    state = {
        'levels': []
    }

    async componentDidMount() {
        let response = await axios.get("./json/levels.json")
        this.setState ({
            'levels': response.data
        })
    }

    render() {



        return (
            <div>
                {this.state.levels}
            </div>
        )
    }
}