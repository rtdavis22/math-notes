/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';

import '../styles/notes-section.css';

export default class NotesSection extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section id={this.props.file}>
        <h1>{this.props.name}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.html}} />
      </section>
    );
  }
}
