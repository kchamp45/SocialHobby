import React from 'react';
import Header from './Header';
import CommentList from './CommentList';
import NavBar from './NavBar';
import Search from './Search';
import Tweets from './Tweets';
import User from './User';
import Biography from './Biography';
import OtherUserList from './OtherUserList';
import { Switch, Route } from 'react-router-dom';
import NewCommentForm from './NewCommentForm';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={NavBar} />
        <Route path='/newcomment' component={NewCommentForm}/>
        <Route path='/comments' component={CommentList}/>
      </Switch>
      <Tweets/>
      <Search/>
      <User/>
      <Biography/>
      <OtherUserList/>

    </div>

  );
}

export default App;
