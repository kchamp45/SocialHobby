import React from 'react';
import crafts from '../assets/images/crafts.jpeg';

function Header(){
  var HeaderStyles = {
    textAlign: 'center',
    color: 'yellow',
    width: '100%',
    marginBottom: '30px',
    height: '250px',
    backgroundImage: 'url(' + crafts + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  return (
    <div style={HeaderStyles}>
      <h1>Hobby Chat</h1>
    </div>
  );
}

export default Header;
