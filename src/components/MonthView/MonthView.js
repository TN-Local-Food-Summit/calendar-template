import React, { Component } from 'react';
import Day from '../Day/Day.js';

class MonthView extends Component{
  constructor(props){
    super(props);
    this.getEventsForDay = this.getEventsForDay.bind(this);
  }


  getEventsForDay(date){
    return this.props.events.filter(event => date.getDate() === event.eventDate.getDate() 
                                          && date.getMonth() === event.eventDate.getMonth() 
                                          && date.getFullYear() === event.eventDate.getFullYear());
  }


  render() {
    let firstDayOfMonth = new Date(this.props.year, this.props.month, 1);
    let lastDayOfMonth = new Date(this.props.year, this.props.month + 1, 0);
    
    const firstDayOffset = firstDayOfMonth.getDay();
    const lastDayOffset = lastDayOfMonth.getDate() + firstDayOffset;

    let tableBody = [];

    for(let i = 0; i<6; ++i){
      let row = [];
      for(let j = 0; j<7; ++j){
        let newDayDate = new Date(this.props.year,this.props.month,firstDayOfMonth.getDate()-firstDayOffset + i * 7 + j);

        row.push(
          <Day
            key = {i*7+j}
            id = {i*7+j}
            render = {i*7+j >= firstDayOffset && i*7+j < lastDayOffset}
            date = {newDayDate}
            events = {this.getEventsForDay(newDayDate)}
            selectEvent = {this.props.selectEvent}
          />
        )
      }
      tableBody.push(
        <tr key={"tr"+i}>
          {row}
        </tr>
      )
    }

    
    return (
      <table>
        <thead key="thead">
          <tr key="header">
            <th key="Sunday">Sunday</th>
            <th key="Monday">Monday</th> 
            <th key="Tuesday">Tuesday</th>
            <th key="Wednesday">Wednesday</th>
            <th key="Thursday">Thursday</th> 
            <th key="Friday">Friday</th>
            <th key="Saturday">Saturday</th>
          </tr>
        </thead>
        <tbody key={this.props.month}>
          {tableBody}
        </tbody>
        
      </table>
    )
  }
}

export default MonthView;
