import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function DateSearch (props) {
   
  return (
    <DatePicker selected={props.selectedDate} onChange={(date) => props.updateDateField(props.dateName, date) }/>
    );

}