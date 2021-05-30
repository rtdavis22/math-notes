import PropTypes from 'prop-types';
import React from 'react';

export default class Section extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section>
        <h1>{this.props.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </section>
    );
  }
}
