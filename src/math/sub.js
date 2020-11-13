import React from 'react';

class B extends React.Component {
  render() {
    return ['{', this.props.children, '}'];
  }
}

class Sub extends React.Component {
  render() {
    return (
      <>
        <>{'_{'}</>
	    {this.props.children}
	<>{'}'}</>
      </>
    );
  }
}

class Sup extends React.Component {
  render() {
    return ['^{', this.props.children, '}'];
  }
}

class Frac extends React.Component {
  render() {
    return ['\\frac{', this.props.children[0], '}{', this.props.children[1], '}'];
  }
}

class Textrm extends React.Component {
  render() {
    return ['\\textrm{', this.props.children, '}'];
  }
}

export {
  B,
  Frac,
  Sub,
  Sup,
  Textrm,
}
