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


  render() {
    let calendarView;
    if(this.state.monthView){
      calendarView =  <MonthView year={this.state.selectedDate.getFullYear()} month={this.state.selectedDate.getMonth()}/>;
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
