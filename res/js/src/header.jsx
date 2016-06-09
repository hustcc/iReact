import React from 'react';

const Header = React.createClass({
  propTypes: {
  },
  render: function() {
    return (
      <div id="header">
        <h1>
          <span>i</span>
          <span>R</span>
          <span>e</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>
        <h1 className="overlay">
          <span>i</span>
          <span>R</span>
          <span>e</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>
      </div>
    );
  }
});
export default Header;