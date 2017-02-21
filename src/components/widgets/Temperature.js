import React from 'react';
import { SemiCircle } from 'react-progressbar.js';

class Temperature extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 0
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {

    const tempStyle = {
      width: '100%',
      maxWidth: '350px',
      height: '100%',
      minHeight: '220px',
      margin:"auto"
    };

    const tempOptions = {
      strokeWidth: 6,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 3,
      easing: 'easeInSine',
      from: {color: '#0080ff'},
      to: {color: '#ED6A5A'},
      text: {
        value: "hiya",
        alignToBottom: false
      }
    }

    return (
      <SemiCircle
        containerStyle={tempStyle}
        options={tempOptions}
        containerClassName={'container has-text-centered'}
        progress={0.7}
       />
    );
  }
}

export default Temperature;