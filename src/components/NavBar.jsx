import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  var NavBarStyles = {
    border: '2px solid gray',
    padding: '10px',
    color: 'gray',
    backgroundColor: '#e6f7ff'
  };
  return (
    <navbar>
      <Link  style={NavBarStyles} to="/">Home</Link><Link style={NavBarStyles}  to="/newcomment">Add Comment</Link><Link  style={NavBarStyles} to="/craft">Craft Ideas</Link>
    </navbar>
  );
}

export default NavBar;
