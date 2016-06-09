import React from 'react';

import Header from './header.jsx';
import SearchBox from './searchBox.jsx';

import Notice from './notice.jsx';
import Footer from './footer.jsx';

const Content = React.createClass({
  propTypes: {
  },
  
  render: function() {
    return (
      <div id="wrapper">
      	<Header />
      	<SearchBox />
      	
      	<Notice />
      	<Footer />
      </div>
    );
  }
});
export default Content;