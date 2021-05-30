import React from 'react';

import NotesConfig from '../notes/NotesConfig';
import NotesPanel from './NotesPanel';

export default () => <NotesPanel sectionConfig={NotesConfig.sections[0]} />;
