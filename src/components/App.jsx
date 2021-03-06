import React from 'react';
import Header from './Header';
import CommentList from './CommentList';
import NavBar from './NavBar';
import Search from './Search';
import Tweets from './Tweets';
import User from './User';
import OtherUserList from './OtherUserList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewCommentControl from './NewCommentControl';
import CraftList from './CraftList';
import FollowerList from './FollowerList';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCommentList: [
      ],
      masterCraftList: [
      ],
      selectedCommentLike: 0,
      dislikeCount: 0
    };

    this.handleAddingNewCommentToList = this.handleAddingNewCommentToList.bind(this);
    this.handleAddLikeCount = this.handleAddLikeCount.bind(this);
    this.handleAddDislikeCount = this.handleAddDislikeCount.bind(this);
  }

  handleAddingNewCommentToList(newComment) {
    var newMasterCommentList = this.state.masterCommentList.slice();
    newComment.formattedElapsedTime = (newComment.timePost).fromNow(true);
    newComment.likeCount = this.state.likeCount;
    newMasterCommentList.push(newComment);
    this.setState({masterCommentList: newMasterCommentList});
  }

  componentDidMount() {
    this.elapsedTimeUpdateTimer = setInterval(() => this.updateCommentElapsedTime(), 60000);
  }

  updateCommentElapsedTime() {
    console.log('check');
    let newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.forEach((comment) =>
      comment.formattedElapsedTime = (comment.timePost).fromNow(true));
    this.setState({masterCommentList: newMasterCommentList});
  }

  handleAddLikeCount(comment) {
    comment = this.state.selectedCommentLike + 1;
    this.setState({selectedCommentLike: comment});
  }

  handleAddDislikeCount() {
    let newDislikeCount = this.state.dislikeCount + 1;
    this.setState({dislikeCount: newDislikeCount});
  }

  componentWillUnmount() {
    clearInterval(this.elapsedTimeUpdateTimer);
  }

  render(){
    return (
      <div>
        <style jsx>{`
          .parentContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: flex-start;
          }
          .container1 {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container2 {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: flex-start;
          }
        `}</style>
        <Header/>
        <div className="container1">
          <NavBar/>
          <Search craftList={this.state.masterCraftList}/>
          <Tweets/>
        </div>
        <div className="parentContainer">
          <div className="container2">
            <User/>
            <Switch>
              <Route exact path='/' render={()=><CommentList commentList={this.state.masterCommentList} selectedCommentLike={this.state.selectedCommentLike}
              onLikeVote = {this.handleAddLikeCount}
              dislikeCount={this.state.dislikeCount}
              onDislikeVote = {this.handleAddDislikeCount}/>} />
              <Route path='/newcomment' render={()=><NewCommentControl onNewCommentCreation={this.handleAddingNewCommentToList}/>} />
              <Route path='/craft' component={CraftList}/>
              <Route path='/followers' component={FollowerList}/>
              <Route component={Error404}/>
            </Switch>
          </div>
          <OtherUserList/>
        </div>
      </div>
    );
  }
}

export default App;
