import React from 'react';
import Results from './results.jsx';

const SearchBox = React.createClass({
  propTypes: {
  },
  getInitialState: function() {
    return {
    	keyword: '',
      timer: null
    };
  },
  componentDidMount: function() {
  },
  getProjectAuthor: function(github) {
    let author = github.split('/');
    if (author && author.length >= 1) {
      author = author[0];
    }
    return author;
  },
  getProjects: function() {
    // random sort
    let projects = iReactProjects.sort(function () { return 0.5 - Math.random() });
    let getProjectAuthor = this.getProjectAuthor;
    projects.map(function(project) {
      project['tagtext'] = project.tags.join(' ').toLowerCase();
    });
    return projects;
  },
  doSearch: function() {
    this.setState({keyword: this.refs.ineed_text.value});
  },
  inputKeyword: function() {
    // clear timer
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    this.state.timer = setTimeout(this.doSearch, 800); // 看体验情况调整数字
  },
  render: function() {
    let projects = this.getProjects();
    return (
    	<div id="search_box">
	      <div id="ineed">
			    <span>I Need React</span>
			    <input placeholder={'include ' + projects.length + ' reacts.'} type="text"ref="ineed_text" id="ineed_text" onChange={this.inputKeyword} />
			  </div>
			  <Results ref="results"
			  	projects={projects}
          keyword={this.state.keyword} />
			</div>
    );
  }
});
export default SearchBox;