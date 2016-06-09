import React from 'react';

import Result from './result.jsx';

const Results = React.createClass({
  propTypes: {
  	projects: React.PropTypes.array.isRequired,
    keyword: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return { keyword: '' };
  },
  componentWillReceiveProps: function(props) {
    this.setState({keyword: props.keyword});
  },
  render: function() {
    let keyword = this.state.keyword;
    return (
      <ul id="results">
      {
        this.props.projects.map(function(project, i) {
          project['tagtext'] = project.tags.join(' ').toLowerCase();
          return <Result key={'react_' + i}
            project={project} 
            keyword={keyword} />
        })
      }
      </ul>
    );
  }
});
export default Results;