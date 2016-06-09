import React from 'react';

const Notice = React.createClass({
  propTypes: {
  },
  render: function() {
    return (
      <div className="clue">
        <p>
          <strong>
            <span>Fantastic</span>
            <span> React</span>
            <span>-</span>
            <span>Components</span>
            <span> and</span>
            <span>React</span>
            <span>-</span>
            <span>Libraries</span>
            <span>!</span>
          </strong>
        </p>

        <p>Want to add your own? <a target="_blank" href="https://github.com/hustcc/iReact">Fork on GitHub</a>, add your react project to data.js and submit a pull request.
        </p>
      </div>
    );
  }
});
export default Notice;

