import React from 'react';

class Mathbb extends React.Component {
  render() {
    return ['\\mathbb{', this.props.children, '}'];
  }
}

export {
  Mathbb,
}
