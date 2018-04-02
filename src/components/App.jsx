import React from 'react';
import Header from './Header';
import CommentList from './CommentList';
import NavBar from './NavBar';
import Search from './Search';
import Tweets from './Tweets';
import User from './User';
import Biography from './Biography';
import OtherUserList from './OtherUserList';

function App(){
  return (
    <div>
      <Header/>
      <NavBar/>
      <Tweets/>
      <Search/>
      <User/>
      <Biography/>
      <CommentList/>
      <OtherUserList/>
    </div>
  );
}

export default App;
