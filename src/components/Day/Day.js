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
    this.state.events.forEach((element,i) => {
      events.push(<p>{i}</p>)
    });
    return (
      <td className="activeDay" key={this.props.id}>
        <p>{this.state.date.getDate()}</p>
        {events}
      </td>
    )
  }
}

export default Day;
