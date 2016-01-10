import React from 'react';
import MainNav from './main_nav';

var MainHeader = React.createClass({
  render: function() {
    return (
      <div className='main-header'>
        <div className='logo'>Storekeeper</div>
        <MainNav />
      </div>
    );
  }
});

//export default MainHeader;
