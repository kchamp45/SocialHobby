import React from 'react';
import susie from '../assets/images/model1.jpg';
import { Link } from 'react-router-dom';

function User (){
  return (
    <div>
      <img src={susie}/>
      <style jsx>{`
          div {
            background: linear-gradient(blue, white);
            border: 5px solid gray;
            padding: 10px;
            margin: 20px 10px 10px 0;
          }
          img {
          width: 60px;
          height: 80px;
          }
          h3 {
            color: red;
            margin-top: 10px;
          }
        `}</style>

      <h3>Susie Humbold</h3>
      <Link to="/tweets">Tweets</Link>&nbsp;&nbsp;
      <Link to="/followers">Followers</Link>&nbsp;&nbsp;
      <Link to="/following">Following</Link>&nbsp;&nbsp;

    </div>
  );
}

export default User;
