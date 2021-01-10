import React, { Component } from 'react';
import './Event.css';

class Event extends Component{
  constructor(props){
    super(props);

  }

  render() {

    return (
      <div className="eventPopup">
        <button onClick={this.props.closeEventPopup}>Close</button>
        <p>{this.props.event.eventName}</p>
        <p>{this.props.event.description}</p>
      </div>
    )
  }
}

export default Event;
