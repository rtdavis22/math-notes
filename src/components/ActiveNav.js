import PropTypes from 'prop-types';
import React from 'react';

import '../styles/active-nav.css';

export default class ActiveNav extends React.Component {
  static propTypes = {
    // TODO: Use prop type
    sectionConfig: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);

    this.state = { selectedSectionId: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const fromTop = window.scrollY;

    this.props.sectionConfig.sections.forEach((sectionConfig, idx) => {
      const section = document.querySelector(`#${sectionConfig.file}`);

      if (
        section.offsetTop <= fromTop
        && section.offsetTop + section.offsetHeight > fromTop
        && this.state.selectedSectionId !== idx
      ) {
        this.setState({ selectedSectionId: idx });
      }
    });
  }

  render() {
    const navList = this.props.sectionConfig.sections.map((sectionConfig, idx) => (
      <li key={sectionConfig.file}>
        <a
          className={(this.state.selectedSectionId === idx) ? 'selected' : ''}
          href={`#${sectionConfig.file}`}
          onClick={() => this.handleScroll()}>
          {sectionConfig.name}
        </a>
      </li>
    ));

    return (
      <nav className="activeNav">
        <ul>
          {navList}
        </ul>
      </nav>
    );
  }
}
