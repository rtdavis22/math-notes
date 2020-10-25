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

export default Proof;
