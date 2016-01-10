import React from 'react';

var Page  = React.createClass({
  render: function() {
    return (
      <div className='page'>
        {this.props.children}
      </div>
    );
  }
});

//export default Page;
