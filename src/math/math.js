import React from 'react';

class Math extends React.Component {
  render() {
    return (
      <span>\({this.props.children}\)</span>
    );
  }
}

export default Math;
