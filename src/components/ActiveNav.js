import React from 'react';

import { ConfigType } from '../notes/NotesConfig';

import '../styles/active-nav.css';

export default class ActiveNav extends React.Component {
  static propTypes = {
    sectionConfig: ConfigType.isRequired,
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
    const { sections } = this.props.sectionConfig;

    for (let i = 0; i < sections.length; i++) {
      const section = document.querySelector(`#${sections[i].file}`);
      if (section.offsetTop + section.offsetHeight > fromTop) {
        if (this.state.selectedSectionId !== i) {
          this.setState({ selectedSectionId: i });
        }
        break;
      }
    }
  }

  render() {
    const navList = this.props.sectionConfig.sections.map((sectionConfig, idx) => (
      <li key={sectionConfig.file}>
        <a
          className={(this.state.selectedSectionId === idx) ? 'selected' : ''}
          href={`#${sectionConfig.file}`}
          onClick={this.handleScroll}>
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
