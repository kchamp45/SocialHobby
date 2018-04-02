import React from 'react';

function User (){
  return (
    <div>
      <style jsx>{`
          div {
            background: linear-gradient(blue, white);
            border: 5px solid gray;
            margin-top: 20px;
          }
        `}</style>
      <p className="current-user">Susie Humbold</p>
        <style jsx>{`
          .current-user {
            color: red;
          }
      `}</style>
      <p>Tweets</p>
      <p>Followers</p>
      <p>Following</p>

    </div>
  );
}

export default User;
