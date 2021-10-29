import React from "react"
import AdvancedBtn from "./AdvancedBtn"
import SearchBtn from "./SearchBtn"
import InputGroup from "react-bootstrap/InputGroup"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"


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
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title="Fields"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item >Level</Dropdown.Item>
                        <Dropdown.Item >Subject</Dropdown.Item>
                        <Dropdown.Item >Topic</Dropdown.Item>
                        <Dropdown.Item >Question</Dropdown.Item>
                    </DropdownButton>
                    <input type="text" 
                            name="advancedSearchInput" 
                            onChange={props.updateFormField} 
                            value={props.advancedSearchInput} 
                            placeholder="Type Here!"/>
                </InputGroup>
                <div>
                    <AdvancedBtn changeSearchForm={props.changeSearchForm} />
                    <SearchBtn />
                </div>
            </div>

        </React.Fragment>



    )
}