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

    const nav = NotesConfig.sections.map((subject, idx) => (
      <button key={subject.name} type="button" onClick={() => this.selectSubject(idx)}>
        {subject.name}
      </button>
    ));

    return (
      <div>
        <div>
          <div id="section-menu-wrapper">
            <nav>
              {nav}
            </nav>
          </div>
          <div id="content-wrapper">
            <NotesPanel sectionConfig={sectionConfig} />
          </div>
          <div id="active-nav-wrapper">
            <ActiveNav />
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
