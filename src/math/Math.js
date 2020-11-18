import React from 'react';

class Brace extends React.Component {
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

var Math = {
  frac,
  mathbb,
  sub,
  sup,
  textrm,
}

export {
  Brace,
  Math,
};
