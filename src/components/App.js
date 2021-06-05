import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import NotesConfig from '../notes/NotesConfig';
import ActiveNav from './ActiveNav';
import NotesPanel from './NotesPanel';

import '../styles/app.css';

export default function App() {
  const navList = [];
  const routes = [];

  NotesConfig.sections.forEach((subject) => {
    navList.push(
      <li key={subject.name}>
        <NavLink to={subject.subdirectory} activeClassName="selected">
          {subject.name}
        </NavLink>
      </li>,
    );

    routes.push(
      <Route key={subject.subdirectory} path={`/${subject.subdirectory}`}>
        <div id="content-wrapper">
          <NotesPanel sectionConfig={subject} />
        </div>
        <div id="active-nav-wrapper">
          <ActiveNav sectionConfig={subject} />
        </div>
      </Route>,
    );
  });

  return (
    <Router>
      <div>
        <div>
          <div id="section-menu-wrapper">
            <nav>
              <ul>
                {navList}
              </ul>
            </nav>
          </div>
          <Switch>
            {routes}
            <Route>
              <Redirect to={`/${NotesConfig.sections[0].subdirectory}`} />
            </Route>
          </Switch>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    </Router>
  );
}
