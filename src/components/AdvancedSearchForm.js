import React from "react"
import AdvancedBtn from "./AdvancedBtn"
import SearchBtn from "./SearchBtn"
import {motion} from "framer-motion"



export default function AdvancedSearchForm(props) {


    return (
        <React.Fragment>
            <div className="search-form mb-2">
                {/* AdvancedSearchForm Title */}
                <div><h1 className="search-form-title">Advanced Search</h1></div>
                <div class="advanced-search-field-div">
                    {/* Search Bar */}
                    <motion.div className="input-group mb-3"
                                animate= {{
                                    opacity: 1
                                }}
                                initial={{
                                    opacity: 0
                                }}
                                transition = {{
                                    type: "tween",
                                    delay: 0.5,
                                    duration: 1
                                }}
                    >
                        {/* Field Dropdown */}
                        <select class="adv-search-field"
                                name="advancedSearchField"
                                onChange={props.updateFormField}
                                value={props.advancedSearchField}
                        >
                            <option value="level" >Level</option>
                            <option value="subject" >Subject</option>
                            <option value="topic">Topic</option>
                            <option value="prompt">Prompt</option>
                        </select>
                        {/* Search Bar Input */}
                        <input type="text"
                                    class ="adv-search-input" 
                                    name="advancedSearchInput" 
                                    onChange={props.updateFormField} 
                                    value={props.advancedSearchInput} 
                                    placeholder="type here"/>
                    </motion.div>
                    {/* Advanced and Search button */}
                    <div class="advanced-search-btns-div">
                        <AdvancedBtn changeSearchForm={props.changeSearchForm} />
                        <SearchBtn searchQuestions={props.advancedSearch}/>
                    </div>
                </div>
            </div>

        </React.Fragment>



    )
}