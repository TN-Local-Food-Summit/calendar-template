import React, { Component } from 'react';
import Day from '../Day/Day.js';

class MonthView extends Component{
  constructor(props){
    super(props);

    this.state = {
      events: this.props.events,
    }
  }

/*
{
    "eventType": conference or workshop
    "eventDate": year month day hours minutes
    "attendees": array of user ids probably
    "speakers": likely names but also may be ids? gonna start with just names for simplicity
    "description": text
    "links": not gonna start off with this one tbh
  }
*/


  render() {
    let firstDayOfMonth = new Date(this.props.year, this.props.month, 1);
    let lastDayOfMonth = new Date(this.props.year, this.props.month + 1, 0);
    
    const firstDayOffset = firstDayOfMonth.getDay();
    const lastDayOffset = lastDayOfMonth.getDate() + firstDayOffset;

    let tableBody = [];

    for(let i = 0; i<6; ++i){
      let row = [];
      for(let j = 0; j<7; ++j){
        let newDayDate = new Date();
        newDayDate.setDate(firstDayOfMonth.getDate()-firstDayOffset + i * 7 + j);

        row.push(
          <Day
            id = {i*7+j}
            render = {i*7+j >= firstDayOffset && i*7+j < lastDayOffset}
            date = {newDayDate}
            events = {[]}
          />
        )
      }
      tableBody.push(
        <tr>
          {row}
        </tr>
      )
    }

    
    return (
      <table>
        <thead>
          <tr>
            <th key="Sunday">Sunday</th>
            <th key="Monday">Monday</th> 
            <th key="Tuesday">Tuesday</th>
            <th key="Wednesday">Wednesday</th>
            <th key="Thursday">Thursday</th> 
            <th key="Friday">Friday</th>
            <th key="Saturday">Saturday</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
        
      </table>
    )
  }
}

export default MonthView;
