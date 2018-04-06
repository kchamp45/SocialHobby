import React from 'react';
import susie from '../assets/images/model1.jpg';
import { Link } from 'react-router-dom';

function User (){
  return (
    <div>
      <img src={susie}/>&nbsp;
        <style jsx>{`
            img {
              width: 25px;
              height: 40px;
              float: left;
            }
          `}</style>
      <style jsx>{`
          div {
            background: linear-gradient(blue, white);
            border: 5px solid gray;
            margin-top: 40px;
          }
        `}</style>

      <h3 className="current-user">Susie Humbold</h3>
      <style jsx>{`
          .current-user {
            color: red;
          }
      `}</style>
      <Link to="/tweets">Tweets</Link>&nbsp;&nbsp;
      <Link to="/followers">Followers</Link>&nbsp;&nbsp;
      <Link to="/following">Following</Link>&nbsp;&nbsp;

    </div>
  );
}

export default User;
