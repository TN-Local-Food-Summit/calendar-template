import React, { Component } from 'react';
import './Day.css';

class Day extends Component{
  constructor(props){
    super(props);

    this.state = {
      render: this.props.render,
      date: this.props.date,
      events: this.props.events,
    }
  }

  render() {
    
    if(!this.state.render)
      return <td className="inactiveDay" key={this.props.id}></td>;

    let events = [];
    this.state.events.forEach((event,i) => {
      events.push(<p key={this.props.id+"event"+i} className="event" onClick={()=>this.props.selectEvent(event.eventId)}>{event.eventName}</p>)
    });
    return (
      <td key={this.props.id} className="activeDay">
        <p className="dateNumber">{this.state.date.getDate()}</p>
        {events}
      </td>
    )
  }
}

export default Day;
