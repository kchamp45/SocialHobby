import React from 'react';

function Header(){
  var HeaderStyles = {
    textAlign: 'center',
    color: 'blue',
    marginBottom: '30px'
  };
  return (
    <div style={HeaderStyles}>
      <h1>HobNob</h1>
      <p>Share your hobby</p>
      <hr/>
    </div>
  );
}

export default Header;
