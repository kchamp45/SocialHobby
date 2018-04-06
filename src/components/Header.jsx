import React from 'react';

function Header(){
  var HeaderStyles = {
    textAlign: 'center',
    color: 'blue',
    marginBottom: '30px'
  };
  return (
    <h1 style={HeaderStyles}>Share Your Hobby</h1>
  );
}

export default Header;
