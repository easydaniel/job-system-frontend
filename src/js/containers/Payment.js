import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FullWidthSection from '../components/FullWidthSection.jsx';
import RaisedButton from 'material-ui/lib/raised-button';
import LinearProgress from 'material-ui/lib/linear-progress';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TextField from 'material-ui/lib/text-field';

import * as PaymentAction from '../actions/PaymentAction.js';
import * as LoginAction from '../actions/LoginAction.js';


class Payment extends Component {

  constructor(props) {
    super(props);
    this.getReport = this.getReport.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleGetToken = this.handleGetToken.bind(this);
    this.handleGetMonth = this.handleGetMonth.bind(this);
    this.getReport();
    setInterval(() => this.handleGetToken(), 1000);
  }

  getReport() {
    this.props.dispatch(PaymentAction.getReport());
  }

  handleGetMonth() {
    var date = this.refs.monthParam.getValue();
    this.props.dispatch(PaymentAction.getMonthReport(date));
  }

  handleSubmit() {
    this.props.dispatch(PaymentAction.postReport());
    console.log('submit');
    console.log(this.props);
  }

  handleChange(e) {
    // console.log('change');
    if (Number(e.target.value)) {
      var ref = e.target.name.split(',');
      var payload = {
        id: ref[0],
        target: ref[1],
        value: e.target.value
      }
      this.props.dispatch(PaymentAction.updateRowReport(payload));
    }
  }

  handleLogin() {
      location.href = 'http://cs.nctu.edu.tw/cscc/cslogin/auth/login';
  }

  handleGetToken() {
      this.props.dispatch(LoginAction.getToken);
      console.log('get');
  }

  render() {
    const tableHeader = ['學號', '姓名', '局號', '帳號', '原始值班時數', '原始job時數', 'schedule時數', '基本薪', '時薪', 'other', '上月', '總結', '報支', '下月'];
    const data = this.props.payment.report;

    const p = JSON.stringify(this.props);
    return (
          <FullWidthSection>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  {
                    tableHeader.map((col) => (<TableHeaderColumn>{col}</TableHeaderColumn>))
                  }
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {
                    data.map((row) => {
                        return (
                            <TableRow selectable={false}>
                              <TableRowColumn>{row.studentId}</TableRowColumn>
                              <TableRowColumn>{row.name}</TableRowColumn>
                              <TableRowColumn>{row.postAccount}</TableRowColumn>
                              <TableRowColumn>{row.account}</TableRowColumn>
                              <TableRowColumn>{row.originDesk}</TableRowColumn>
                              <TableRowColumn>{row.originJobs}</TableRowColumn>
                              <TableRowColumn>{row.schedule}</TableRowColumn>
                              <TableRowColumn>{row.base}</TableRowColumn>
                              <TableRowColumn>{row.salary}</TableRowColumn>
                              <TableRowColumn><TextField name={row.studentId + ',other'} fullWidth={true} onChange={this.handleChange} hintText="other" defaultValue={row.other} /></TableRowColumn>
                              <TableRowColumn>{row.prev}</TableRowColumn>
                              <TableRowColumn>{row.total}</TableRowColumn>
                              <TableRowColumn><TextField name={row.studentId + ',pay'} fullWidth={true} onChange={this.handleChange} hintText="報支" defaultValue={row.pay} /></TableRowColumn>
                              <TableRowColumn>{row.next}</TableRowColumn>
                            </TableRow>
                        );
                    })
                }
              </TableBody>
            </Table>
            <RaisedButton
              label="Submit"
              onClick={this.handleSubmit}
              secondary
            />
          <TextField ref="monthParam" hintText="日期格式: 2015/01"/>
            <RaisedButton
              label="Get Month"
              onClick={this.handleGetMonth}
              primary
            />
          <h1>{this.props.payment.message}</h1>

            <RaisedButton
              label="Login"
              onClick={this.handleLogin}
            />
            <h1>token: {this.props.login.token}</h1>

          </FullWidthSection>
          );
  }
}


export default connect(state => ({
    payment: state.payment,
    login: state.login,
}))(Payment);
