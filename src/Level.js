import React from "react"


export default class Level extends React.Component {

    state = {
        "level": "Primary",
        "grade": [1, 2, 3, 4, 5, 6]
    }




    render() {
        return (
            <React.Fragment>
                <label>{this.state.level}: </label>
                {this.state.grade.map(function(grade){
                    return (
                        <React.Fragment>
                            <input type="radio" value={grade}/>
                            <span>{grade}</span>
                        </React.Fragment>

                    )
                })}
            </React.Fragment>




        )
    }
}