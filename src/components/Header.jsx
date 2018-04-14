import React from 'react';
import crafts from '../assets/images/crafts.jpeg';

function Header(){
  var HeaderStyles = {
    textAlign: 'center',
    color: 'blue',
    width: '83%',
    marginBottom: '30px',
    height: '200px',
    backgroundImage: "url(" + crafts + ")"
  };
  return (
    <div style={HeaderStyles}>
      <h1>Hobby Chat</h1>
    </div>
  );
}

export default Header;
