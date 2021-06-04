import React from 'react';

import NotesConfig from '../notes/NotesConfig';
import ActiveNav from './ActiveNav';
import NotesPanel from './NotesPanel';

import '../styles/app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedSubjectId: 0 };
  }

  selectSubject(id) {
    this.setState({ selectedSubjectId: id });
  }

  render() {
    const sectionConfig = NotesConfig.sections[this.state.selectedSubjectId];

    const navList = NotesConfig.sections.map((subject, idx) => (
      <li key={subject.name}>
        <button
          type="button"
          className={(this.state.selectedSubjectId === idx) ? 'selected' : ''}
          onClick={() => this.selectSubject(idx)}>
          {subject.name}
        </button>
      </li>
    ));

    return (
      <div>
        <div>
          <div id="section-menu-wrapper">
            <nav>
              <ul>
                {navList}
              </ul>
            </nav>
          </div>
          <div id="content-wrapper">
            <NotesPanel sectionConfig={sectionConfig} />
          </div>
          <div id="active-nav-wrapper">
            <ActiveNav sectionConfig={sectionConfig} />
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
