import PropTypes from 'prop-types';
import React from 'react';

import Section from './Section';

import '../styles/app.css';
import '../styles/notes.css';

export default class NotesPanel extends React.Component {
  static propTypes = {
    sectionConfig: PropTypes.shape({
      subdirectory: PropTypes.string,
      sections: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        file: PropTypes.string,
      })),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { sections: null };
  }

  componentDidMount() {
    const { sectionConfig } = this.props;

    Promise.all(sectionConfig.sections.map((section) => (
      import(`../notes/${sectionConfig.subdirectory}/${section.file}.html`).then((module) => {
        const html = module.default;
        const body = html.match(new RegExp('<body>(.*)</body>', 's'))[1];
        return (
          <div key={section.name}>
            <Section name={section.name} html={body} />
            <hr />
          </div>
        );
      })
    ))).then((res) => this.setState({ sections: res }));
  }

  componentDidUpdate() {
    MathJax.typeset(); // eslint-disable-line no-undef
  }

  render() {
    return (
      <div className="notes_wrapper">
        {this.state.sections}
      </div>
    );
  }
}
