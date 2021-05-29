import React from 'react';

import {NotesConfig} from './../notes/NotesConfig';
import {NotesPanel} from './NotesPanel';

class App extends React.Component {
  render() {
    return <NotesPanel sectionConfig={NotesConfig['sections'][0]} />
  }
}

export default App;
