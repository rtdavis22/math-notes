import React from 'react';

// autogenerate these classes?
class b extends React.Component {
  render() {
    return ['{', this.props.children, '}'];
  }
}

class sub extends React.Component {
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

class sup extends React.Component {
  render() {
    return ['^{', this.props.children, '}'];
  }
}

class frac extends React.Component {
  render() {
    return ['\\frac{', this.props.children[0], '}{', this.props.children[1], '}'];
  }
}

class mathbb extends React.Component {
  render() {
    return ['\\mathbb{', this.props.children, '}'];
  }
}

class textrm extends React.Component {
  render() {
    return ['\\textrm{', this.props.children, '}'];
  }
}

var m = {
  b,
  frac,
  mathbb,
  sub,
  sup,
  textrm,
}

export default m;
