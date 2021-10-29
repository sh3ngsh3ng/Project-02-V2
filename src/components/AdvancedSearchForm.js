import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import AdvancedBtn from "./AdvancedBtn"
import SearchBtn from "./SearchBtn"



export default function AdvancedSearchForm (props) {


    return(
        <div className="search-form mb-2">
            <div><h1 class="search-form-title">Advanced Search</h1></div>
            <div class="search-field-div">
                <span>Search by Keywords:</span>
                <input type="text"></input>
            </div>
            <div>
                <AdvancedBtn changeSearchForm={props.changeSearchForm}/>
                <SearchBtn />
            </div>
        </div>



    )
}