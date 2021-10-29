import React from "react"
import AdvancedBtn from "./AdvancedBtn"
import SearchBtn from "./SearchBtn"



export default function AdvancedSearchForm(props) {


    return (
        <React.Fragment>
            {/* <div className="search-form mb-2">
                <div><h1 className="search-form-title">Advanced Search</h1></div>
                <div className="search-field-div">
                    <span>Search by Keywords:</span>
                    <input type="text"></input>
                </div>
                <div>
                    <AdvancedBtn changeSearchForm={props.changeSearchForm} />
                    <SearchBtn />
                </div>
            </div> */}
            <div className="search-form mb-2">
                <div><h1 className="search-form-title">Advanced Search</h1></div>
                <div className="input-group mb-3">
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
                    <input type="text" 
                                name="advancedSearchInput" 
                                onChange={props.updateFormField} 
                                value={props.advancedSearchInput} 
                                placeholder="Type Here!"/>
                </div>
                <div>
                    <AdvancedBtn changeSearchForm={props.changeSearchForm} />
                    <SearchBtn />
                </div>
            </div>

        </React.Fragment>



    )
}