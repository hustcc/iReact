import React from 'react';
import fuzzysearch from 'fuzzysearch';
import Tags from './tags.jsx';

const Result = React.createClass({
  propTypes: {
  	project: React.PropTypes.object.isRequired,
    keyword: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return { keyword: '' };
  },
  componentWillReceiveProps: function(props) {
    this.setState({keyword: props.keyword});
  },
  canSearch: function(keyword) {
    keyword = keyword.toLowerCase();

    return fuzzysearch(keyword, this.props.project.name.toLowerCase()) ||
            fuzzysearch(keyword, this.props.project.description.toLowerCase()) ||
            fuzzysearch(keyword, this.props.project.tagtext) || 
            fuzzysearch(keyword, this.props.project.author);
  },
  render: function() {
    let class_name = "result-show";
    if (! this.canSearch(this.state.keyword)) {
      class_name = 'result-hidden';
    }

    return (
      <li className={class_name}>
      	<a href={this.props.project.repo}
          target="_blank">
      		<div className="author">{this.props.project.author}</div>
      		<div className="title">
      			<h3>{this.props.project.name}</h3>
      			<Tags tags={this.props.project.tags} />
      		</div>
      		{this.props.project.description}
      	</a>
      </li>
    );
  }
});
export default Result;