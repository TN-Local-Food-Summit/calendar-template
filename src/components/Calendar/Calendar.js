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
      events: this.props.events, // This may be loaded in the Calendar class in the future   
      selectedEvent: null,
    }
    this.setSelectedDate = this.setSelectedDate.bind(this);
    this.closeEventPopup = this.closeEventPopup.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
    this.switchCalendarView = this.switchCalendarView.bind(this);
  }

  setSelectedDate(date) {
    this.setState({
      selectedDate: date
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

  switchCalendarView() {
    this.setState({
      monthView: !this.state.monthView,
    })
  }

  render() {
    let calendarView;
    if(this.state.monthView){
      const eventsOfMonth = this.state.events.filter(event => event["eventDate"].getMonth() === this.state.selectedDate.getMonth());

      calendarView =  <MonthView 
                        events={eventsOfMonth}
                        selectedDate={this.state.selectedDate} 
                        selectEvent ={this.selectEvent}
                        setSelectedDate = {this.setSelectedDate}
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
    }

    return (
      <div>
        <button onClick={this.switchCalendarView}>Switch Calendar View</button>
        {calendarView}
        {eventView}
      </div>
    )
  }
}

export default Calendar;
