import PropTypes from 'prop-types';
import React from 'react';

import NotesSection from './NotesSection';

import '../styles/notes-panel.css';

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
    this.loadDataAsync(this.props.sectionConfig);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sectionConfig.subdirectory !== this.props.sectionConfig.subdirectory) {
      this.loadDataAsync(this.props.sectionConfig);
    } else {
      MathJax.typeset(); // eslint-disable-line no-undef
    }
  }

  loadDataAsync(sectionConfig) {
    Promise.all(sectionConfig.sections.map((section) => (
      import(`../notes/${sectionConfig.subdirectory}/${section.file}.html`).then((module) => {
        const html = module.default;
        const body = html.match(new RegExp('<body>(.*)</body>', 's'))[1];
        return (
          <div key={section.name}>
            <NotesSection name={section.name} html={body} file={section.file} />
            <hr />
          </div>
        );
      })
    ))).then((res) => this.setState({ sections: res }));
  }

  render() {
    return (
      <div className="notes_wrapper">
        {this.state.sections}
      </div>
    );
  }
}
