import React from 'react';

import './styles/app.css';
import './styles/notes.css';

import {Config} from './Config';

class App extends React.Component {
  render() {
    return <Notes sectionConfig={Config['sections'][0]} />
  }
}

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {sections: null};
  }

  componentDidMount() {
    const {sectionConfig} = this.props;

    Promise.all(sectionConfig["sections"].map(section => {
      return import(`./notes/${sectionConfig.subdirectory}/${section.file}.html`).then((module) => {
        const html = module.default;
	const body = html.match(new RegExp('<body>(.*)</body>', 's'))[1];
	return (
	  <div key={section.name}>
	    <Section name={section.name} html={body} />
	    <hr />
	  </div>
	);
      });
    })).then(res => this.setState({sections:res}));
  }

  componentDidUpdate() {
    MathJax.typeset();
  }

  render() {
    return (
      <div className="notes_wrapper">
         {this.state.sections}
      </div>
    );
  }
}

class Section extends React.Component {
  render() {
    return (
      <section>
        <h1>{this.props.name}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.html}} />
      </section>
    );
  }
}

export default App;
