import React, { Component } from 'react';
import Day from '../Day/Day.js';

class MonthView extends Component{
  constructor(props){
    super(props);
    this.getEventsForDay = this.getEventsForDay.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
  }


  getEventsForDay(date){
    return this.props.events.filter(event => date.getDate() === event.eventDate.getDate() 
                                          && date.getMonth() === event.eventDate.getMonth() 
                                          && date.getFullYear() === event.eventDate.getFullYear());
  }

  // This function is used to change the selected month
  changeMonth(amount) {
    let selectedDate = this.props.selectedDate;
    selectedDate.setDate(1);
    selectedDate.setMonth(selectedDate.getMonth() + amount);
    this.props.setSelectedDate(selectedDate);
  }


  render() {
    let firstDayOfMonth = new Date(this.props.selectedDate.getFullYear(), this.props.selectedDate.getMonth(), 1);
    let lastDayOfMonth = new Date(this.props.selectedDate.getFullYear(), this.props.selectedDate.getMonth() + 1, 0);
    
    const firstDayOffset = firstDayOfMonth.getDay();
    const lastDayOffset = lastDayOfMonth.getDate() + firstDayOffset;

    let tableBody = [];

    for(let i = 0; i<6; ++i){
      let row = [];
      for(let j = 0; j<7; ++j){
        let newDayDate = new Date(this.props.selectedDate.getFullYear(),this.props.selectedDate.getMonth(),firstDayOfMonth.getDate()-firstDayOffset + i * 7 + j);

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
      <div>
        <button onClick={() => this.changeMonth(-1)}>Prev Month</button>
        <button onClick={() => this.changeMonth(1)}>Next Month</button>
        <h1>{this.props.selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
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
          <tbody key={this.props.selectedDate}>
            {tableBody}
          </tbody>
          
        </table>
      </div>
    )
  }
}

export default MonthView;
