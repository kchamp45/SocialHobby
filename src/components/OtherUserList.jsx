import React from 'react';
import OtherUser from './OtherUser';
import trump from '../assets/images/Trump.jpg';
import obama from '../assets/images/Obama.jpg';
import carter from '../assets/images/Carter.jpg';

var otherUser = [
  {
    image: <img src={trump} width='45px' height='60px'/>,
    name: 'Trump',
    button: 'button'
  },
  {
    image: <img src={obama} width='45px' height='60px'/>,
    name: 'Obama',
    button: 'button'
  },
  {
    image: <img src={carter} width='45px' height='60px'/>,
    name: 'Carter',
    button: 'button'
  }
];

function OtherUserList() {
  var OtherListStyles = {
    padding: '10px',
    backgroundColor: '#ffffcc'
  };

  return (
    <div style={OtherListStyles}>
      <h3>Group Members:</h3>
      {otherUser.map((otherUser, index) =>
        <OtherUser image={otherUser.image}
          name={otherUser.name}
          button={otherUser.button}
          key={index}/>
      )}
    </div>
  );
}

export default OtherUserList;
