import React from 'react'


export default function QuestionTags(props) {



    return (
        <React.Fragment>
            <input type="checkbox" name="selectedTags" value="hot" 
                                checked={props.selectedTags.includes("hot")}
                                onChange={props.updateFormField}
                                />
            <label>Hot</label>
            <input type="checkbox" name="selectedTags" value="trending" 
                                checked={props.selectedTags.includes("trending")}
                                onChange={props.updateFormField}
                                />
            <label>Trending</label>
            <input type="checkbox" name="selectedTags" value="popular" 
                                checked={props.selectedTags.includes("popular")}
                                onChange={props.updateFormField}
                                />
            <label>Popular</label>
            <input type="checkbox" name="selectedTags" value="challenging"
                                onChange={props.updateFormField} 
                                checked={props.selectedTags.includes("challenging")}/>
            <label>Challenging</label>
        </React.Fragment>
    )


}