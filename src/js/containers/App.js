import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/lib/raised-button';
import FullWidthSection from '../components/FullWidthSection.jsx';
import SearchBox from '../components/SearchBox.jsx';
import * as GithubAction from '../actions/GithubAction.js';
import LinearProgress from 'material-ui/lib/linear-progress';

class App extends Component {
  constructor(props) {
    super(props);
    this.onInClick = this.onInClick.bind(this);
    this.onDeClick = this.onDeClick.bind(this);
    this.onGetClick = this.onGetClick.bind(this);
    this.onPostUser = this.onPostUser.bind(this);
  }

  onInClick() {
    this.props.dispatch(GithubAction.increment(1));
  }

  onDeClick() {
    this.props.dispatch(GithubAction.decrement(1));
  }

  onGetClick() {
    this.props.dispatch(GithubAction.isLoading());
    this.props.dispatch(GithubAction.fetchRowData(10));
  }

  onPostUser() {
    const mock = { name: 'what', age: 30 };
    this.props.dispatch(GithubAction.postUser(mock));
  }

  render() {
    const isLoading = this.props.apiStatus.isLoading ?
      <LinearProgress
        color={"rgb(255, 0, 20)"}
        mode="indeterminate"
        style={{
          position: 'fixed',
          top: '64px',
          left: '0px',
        }}
      /> : '';

    const teamMembers = this.props.github.teams.map((data, index) => (
      <li key={index + Math.random()}>{data.fname} {data.lname}</li>
    ));

    return (
      <FullWidthSection>
        <h1>Redux Container component</h1>
        <h4>Message: {this.props.github.message || 'default' }</h4>
        <SearchBox />
        <RaisedButton
          label="increment"
          style={{ margin: 12 }}
          onClick={this.onInClick}
          secondary
        />
        <RaisedButton
          label="decrement"
          style={{ margin: 12 }}
          onClick={this.onDeClick}
          secondary
        />
        <RaisedButton
          label="Fetch"
          style={{ margin: 12 }}
          onClick={this.onGetClick}
          secondary
        />
        <RaisedButton
          label="Post"
          style={{ margin: 12 }}
          onClick={this.onPostUser}
          secondary
        />
        <h6>display: {this.props.github.counter}</h6>
        <ul>
          {teamMembers}
        </ul>
        { isLoading }
      </FullWidthSection>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.array,
};

App.propTypes = {
  github: PropTypes.object.isRequired,
  apiStatus: PropTypes.object.isRequired,
};

export default connect(state => state)(App);
