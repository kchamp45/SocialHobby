import React from 'react';
import OtherUser from './OtherUser';
import melania from '../assets/images/Melania.jpg';
import michelle from '../assets/images/Michelle.jpg';
import rosalynn from '../assets/images/Rosalynn.jpg';
import laura from '../assets/images/Laura.jpg';

var otherUser = [
  {
    image: <img src={melania} width='50px' height='60px'/>,
    name: 'Melania',
    button: 'More info'
  },
  {
    image: <img src={michelle} width='50px' height='60px'/>,
    name: 'Michelle',
    button: 'More info'
  },
  {
    image: <img src={laura} width='50px' height='60px'/>,
    name: 'Laura',
    button: 'More Info'
  },
  {
    image: <img src={rosalynn} width='50px' height='60px'/>,
    name: 'Rosalynn',
    button: 'More Info'
  }
];

function OtherUserList() {
  var OtherListStyles = {
    padding: '20px',
    backgroundColor: '#e6e6ff',
    width: '21%'
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
