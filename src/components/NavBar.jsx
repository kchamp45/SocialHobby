import React from 'react';

function NavBar(){
  var NavBarStyles = {
    border: '2px solid gray',
    padding: '10px',
    color: 'gray'
  };
  return (
    <nav>
      <span style={NavBarStyles}>Home</span>
      <span style={NavBarStyles}>Notifications</span>
      <span style={NavBarStyles}>Messages</span>
    </nav>
  );
}

export default NavBar;
