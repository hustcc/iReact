import React from 'react';

const Tags = React.createClass({
  propTypes: {
  	tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },
  render: function() {
    return (
      <div className="stat">
      	{
			    this.props.tags.map(function (tag) {
			      return <span className="icon" key={tag}>{tag}</span>
			    })
			  }
	  	</div>
    );
  }
});
export default Tags;