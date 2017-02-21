import React, {Component} from 'react';
import {Circle} from 'react-progressbar.js';

class Clock extends Component  {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.count(),
      1000
    );
  };
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  count() {
    this.setState({
      date: new Date()
    });
  };
  
  render() {

    const clockTime = this.state.date.toLocaleTimeString();
    const clockDate = this.state.date.toLocaleDateString();

    const circleStyle = {
      width: '100%',
      maxWidth: '220px',
      height: '100%',
      maxHeight: '220px',
      margin:"auto"
    };

    const circleOptions = {
      strokeWidth: 6,
      trailColor: '#eee',
      trailWidth: 2,
      easing: 'easeInSine',
      color: '#0080ff'
    }

    return (
      <Circle 
      containerStyle={circleStyle}
      options={circleOptions}
      containerClassName={'has-text-centered'}
      progress={this.state.date.getSeconds()/60}
      text={`${clockTime} ${clockDate}`}
      />
    )
  };
}

export default Clock