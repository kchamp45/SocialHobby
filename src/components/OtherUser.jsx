import React from 'react';
import PropTypes from 'prop-types';

function OtherUser(props) {
  var UserStyles = {
    color: 'black'
  };

  return(
    <div style={UserStyles}>
      <h3>{props.image}</h3>
      <h3>{props.name}</h3>
      <button>{props.button}</button>
      <style jsx>{`
          button {
            background-color: #1a75ff;
            color: white;
          }
      `}</style>
      <hr/>
    </div>
  );
}

OtherUser.propTypes = {
  image: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.string
};

export default OtherUser;
