import React, { Component } from 'react';
import MonthView from '../MonthView/MonthView.js';
import WeekView from '../WeekView/WeekView.js';

class Calendar extends Component{
  constructor(props){
    super(props);

    const today = new Date();
    let threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate()-3);

    this.state = {
      monthView: true,
      selectedDate: today,
      firstDay: threeDaysAgo, // This is used in week view and represents the first day shown, may be a dif month
      events: this.props.events, // This may be loaded in the Calendar class in the future   
    }
    this.changeMonth = this.changeMonth.bind(this);
  }

  changeMonth(amount) {
    let tmp = this.state.selectedDate;
    tmp.setDate(1);
    tmp.setMonth(tmp.getMonth() + amount);
    this.setState({
      selectedDate: tmp,
      firstDay: tmp,
    })
    console.log(this.state.selectedDate);
  }

/*
{
    "eventType": conference or workshop
    "eventDate": date object JS
    "attendees": array of user ids probably
    "speakers": likely names but also may be ids? gonna start with just names for simplicity
    "description": text
    "links": not gonna start off with this one tbh
  }
*/

  render() {
    let calendarView;
    if(this.state.monthView){
      const eventsOfMonth = this.state.events.filter(event => event["eventDate"].getMonth() === this.state.selectedDate.getMonth());

      calendarView =  <MonthView 
                        events={eventsOfMonth}
                        year={this.state.selectedDate.getFullYear()} 
                        month={this.state.selectedDate.getMonth()}
                      />;
    }else{
      calendarView = <WeekView/>;
    }
    

    return (
      <div>
        <button onClick={() => this.changeMonth(-1)}>Prev Month</button>
        <button onClick={() => this.changeMonth(1)}>Next Month</button>
        <h1>{this.state.selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
        {calendarView}
      </div>
    )
  }
}

export default Calendar;
