import React from 'react';
import Biography from './Biography';
import susie from '../assets/images/model1.jpg';
import { Link } from 'react-router-dom';

function User (){
  return (
    <div>
      <img src={susie}/>
      <style jsx>{`
          div {
            background: linear-gradient(blue, white);
            padding: 10px;
            margin-right: 10px;
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
      <Biography/>
      <hr/>
    </div>
  );
}

export default User;
