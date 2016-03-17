/**
 * Master Component
 * the root component
 */
import React, { PropTypes } from 'react';
import LeftNavBar from './components/LeftNavBar.jsx';
import { AppCanvas, AppBar, FlatButton } from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from '../theme.js';
import { connect } from 'react-redux';


import * as LoginAction from './actions/LoginAction.js';

class Master extends React.Component {

    constructor(props) {
      super(props);
      this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleGetToken = this.handleGetToken.bind(this);
      this.handleGetUserInfo = this.handleGetUserInfo.bind(this);
      this.handleGetUserInfo();
      this.handleGetToken();
    }

    getChildContext() {
      return {
        muiTheme: ThemeManager.getMuiTheme(Theme),
      };
    }


    handleGetToken() {
        this.props.dispatch(LoginAction.getToken());
        console.log('test');
    }

    handleGetUserInfo() {
        this.props.dispatch(LoginAction.getUserInfo());
    }

    handleLogin() {
        location.href = 'http://cs.nctu.edu.tw/cscc/cslogin/auth/login';
    }
    handleLogout() {
        location.href = 'http://cs.nctu.edu.tw/cscc/cslogin/auth/logout?token=' + this.props.login.token;
    }

    onLeftIconButtonTouchTap() {
      this.refs.leftNav.handleToggle();
    }

    render() {

      const user = this.props.login.user;
      const uid = user.uid;
      return (
            <AppCanvas>
              <AppBar
                onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
                title={ (typeof(uid) === "undefined" ? "NCTU-CSCC" : uid) }
                iconElementRight={<FlatButton
                  label={(typeof(uid) === "undefined" ) ? "Login" : "Logout"}
                  onClick={typeof(uid) === "undefined" ? this.handleLogin : this.handleLogout}
                />}
              />
              <LeftNavBar ref="leftNav" />
              {this.props.children}
            </AppCanvas>
        );
    }
}

Master.propTypes = {
  children: PropTypes.object.isRequired,
};

Master.contextTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

Master.childContextTypes = {
  muiTheme: PropTypes.object,
};
export default connect(state => ({
    login: state.login,
}))(Master);
