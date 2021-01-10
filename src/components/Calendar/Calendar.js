import React, { Component } from 'react';
import Event from '../Event/Event.js';
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
      selectedEvent: null,
    }
    this.changeMonth = this.changeMonth.bind(this);
    this.closeEventPopup = this.closeEventPopup.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
  }

  // This function is used to change the selected month
  changeMonth(amount) {
    let tmp = this.state.selectedDate;
    tmp.setDate(1);
    tmp.setMonth(tmp.getMonth() + amount);
    this.setState({
      selectedDate: tmp,
      firstDay: tmp,
    })
  }

  closeEventPopup() {
    this.setState({
      selectedEvent: null,
    })
  }

  selectEvent(eventId) {
    this.setState({
      selectedEvent: eventId,
    })
  }

  render() {
    let calendarView;
    if(this.state.monthView){
      const eventsOfMonth = this.state.events.filter(event => event["eventDate"].getMonth() === this.state.selectedDate.getMonth());

      calendarView =  <MonthView 
                        events={eventsOfMonth}
                        year={this.state.selectedDate.getFullYear()} 
                        month={this.state.selectedDate.getMonth()}
                        selectEvent ={this.selectEvent}
                      />;
    }else{
      calendarView = <WeekView/>;
    }
    
    let eventView;
    if(this.state.selectedEvent){
      let event;
      this.state.events.forEach(element => {
        if(element.eventId === this.state.selectedEvent){
          event = element;
          return;
        }
      });
      if(!event)
        console.error("Event is null, this should never happen");
      eventView = <Event
                    event = {event}
                    closeEventPopup = {this.closeEventPopup}
                  />
    }else{

    }


    return (
      <div>
        <button onClick={() => this.changeMonth(-1)}>Prev Month</button>
        <button onClick={() => this.changeMonth(1)}>Next Month</button>
        <h1>{this.state.selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
        {calendarView}
        {eventView}
      </div>
    )
  }
}

export default Calendar;
