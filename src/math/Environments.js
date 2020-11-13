import React from 'react';

class Proof extends React.Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <span><i>Proof: </i></span>
	{this.props.children}
        <p style={{position: 'absolute', right: '0px', bottom: '-15px'}}>\(\square\)</p>
      </div>
    );
  }
}

class Theorem extends React.Component {
  render() {
    var name = null;
    if (this.props.name) {
      name = <span>{' ('}{this.props.name}{')'}</span>;
    }
    return (
      <span>
        <strong>Theorem</strong>
	{name}
	<span><strong>{'. '}</strong></span>
        <em>{this.props.children}</em>
      </span>
    );
  }
}

export {
  Proof,
  Theorem,
}
