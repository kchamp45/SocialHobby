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
import Error404 from './Error404';
import NewCommentControl from './NewCommentControl';
import CraftList from './CraftList';
import FollowerList from './FollowerList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCommentList: [
      ],
      masterCraftList: [
      ]
    };
    this.handleAddingNewCommentToList = this.handleAddingNewCommentToList.bind(this);
  }

  handleAddingNewCommentToList(newComment) {
    var newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.push(newComment);
    this.setState({masterCommentList: newMasterCommentList});

  }

  render(){
    return (
      <div>
        <Header/>
        <NavBar/>
        <Tweets/>
        <Search craftList={this.state.masterCraftList}/>
        <User/>
        <Biography/>
        <Switch>
          <Route exact path='/' render={()=><CommentList commentList={this.state.masterCommentList} />} />
          <Route path='/newcomment' render={()=><NewCommentControl onNewCommentCreation={this.handleAddingNewCommentToList}/>} />
          <Route path='/craft' component={CraftList}/>
          <Route path='/followers' component={FollowerList}/>
          <Route component={Error404}/>
        </Switch>
        <OtherUserList/>
      </div>
    );
  }
}

export default App;
