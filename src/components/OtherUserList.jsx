import React from 'react';
import OtherUser from './OtherUser';

var otherUser = [
  {
    image: 'image1',
    name: 'Trump',
    button: 'button'

  },
  {
    image: 'image2',
    name: 'Obama',
    button: 'button'
  },
  {
    image: 'image3',
    name: 'Carter',
    button: 'button'
  }
];

function OtherUserList() {
  var OtherListStyles = {
    border: '5px solid gray',
    padding: '10px',
    margin: '10px 5px 10px 5px',
  };

  return (
    <div style={OtherListStyles}>
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
