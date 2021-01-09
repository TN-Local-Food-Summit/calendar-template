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
    this.increaseMonth = this.increaseMonth.bind(this);
    this.decreaseMonth = this.decreaseMonth.bind(this);
    console.log(this.state.currentMonth);
    console.log(this.state.firstDay);
  }

  increaseMonth() {
    let tmp = this.state.selectedDate;
    tmp.setDate(1);
    tmp.setMonth(tmp.getMonth() + 1);
    this.setState({
      selectedDate: tmp,
    })
    console.log(this.state.selectedDate);
  }

  decreaseMonth() {
    let tmp = this.state.selectedDate;
    tmp.setDate(1);
    tmp.setMonth(tmp.getMonth() - 1);
    this.setState({
      selectedDate: tmp,
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
        <button onClick={this.decreaseMonth}>Prev Month</button>
        <button onClick={this.increaseMonth}>Next Month</button>
        <h1>{this.state.selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
        {calendarView}
      </div>
    )
  }
}

export default Calendar;
