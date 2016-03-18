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
import Divider from 'material-ui/lib/divider';

import * as PaymentAction from '../actions/PaymentAction.js';


class Payment extends Component {

  constructor(props) {
    super(props);
    this.getReport = this.getReport.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGetMonth = this.handleGetMonth.bind(this);
    this.getReport();
    //setInterval(() => this.handleGetToken(), 1000);
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
  }

  handleChange(e) {
    if (Number(e.target.value)) {
    //  console.log('change');
      var ref = e.target.name.split(',');
      var payload = {
        id: ref[0],
        target: ref[1],
        value: e.target.value
      }
      this.props.dispatch(PaymentAction.updateRowReport(payload));
    }
  }


  render() {
    const p = JSON.stringify(this.props.login.user);
    const token = this.props.login.token;
    const tableSettings = {
      fixHeader: true,
      displaySelectAll: false,
      adjustForCheckbox: false,
      displayRowCheckbox: false,
      selectable: false,
      fullWidth: true
    }
    const styles = {
      "submitBtn": {
        "marginLeft": "90%",
        "marginTop": "2%"
      },
      "tableHeader": {
        "textAlign" : "center",
        "fontSize" : "1.4em"
      }
    }
    const tableHeader = ['學號', '姓名', '局號', '帳號', '原始值班時數', '原始job時數', 'schedule時數', '基本薪', '時薪', 'other', '上月', '總結', '報支', '下月'];
    const data = this.props.payment.report;
    const table = (
            <Table
              fixedHeader={ tableSettings.fixHeader }
            >
              <TableHeader displaySelectAll={ tableSettings.displaySelectAll } adjustForCheckbox={ tableSettings.adjustForCheckbox }>
                <TableRow>
                  <TableHeaderColumn
                    colSpan={ tableHeader.length }
                    style={ styles.tableHeader }
                  >
                  hellow
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  {
                    tableHeader.map((col) => (<TableHeaderColumn>{col}</TableHeaderColumn>))
                  }
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={ tableSettings.displayRowCheckbox }>
                {
                    data.map((row) => {
                        return (
                            <TableRow selectable={ tableSettings.selectable }>
                              <TableRowColumn>{row.studentId}</TableRowColumn>
                              <TableRowColumn>{row.name}</TableRowColumn>
                              <TableRowColumn>{row.postAccount}</TableRowColumn>
                              <TableRowColumn>{row.account}</TableRowColumn>
                              <TableRowColumn>{row.originDesk}</TableRowColumn>
                              <TableRowColumn>{row.originJobs}</TableRowColumn>
                              <TableRowColumn>{row.schedule}</TableRowColumn>
                              <TableRowColumn>{row.base}</TableRowColumn>
                              <TableRowColumn>{row.salary}</TableRowColumn>
                              <TableRowColumn><TextField name={row.studentId + ',other'} fullWidth={ tableSettings.fullWidth } onChange={this.handleChange} hintText="other" defaultValue={row.other} /></TableRowColumn>
                              <TableRowColumn>{row.prev}</TableRowColumn>
                              <TableRowColumn>{row.total}</TableRowColumn>
                              <TableRowColumn><TextField name={row.studentId + ',pay'} fullWidth={ tableSettings.fullWidth } onChange={this.handleChange} hintText="報支" defaultValue={row.pay} /></TableRowColumn>
                              <TableRowColumn>{row.next}</TableRowColumn>
                            </TableRow>
                        );
                    })
                }
              </TableBody>
            </Table>
        )

    const fakeData = [
      {
          "year": 2016,
          "month": 1,
          "data": [
              {
                "WWW": 7.122
              },
              {
                "BSD": 3.14
              }
          ]
      },
      {
          "year": 2016,
          "month": 2,
          "data": [
              {
                "WWW": 7.122
              },
              {
                "something": 3.14
              },
              {
                "other": 11114
              }
          ]
      },
  ]
    const userTable = fakeData.map((section) => {
                        return (
                          <Table>
                            <TableHeader displaySelectAll={ tableSettings.displaySelectAll } adjustForCheckbox={ tableSettings.adjustForCheckbox }>
                              <TableRow>
                                <TableHeaderColumn>Date</TableHeaderColumn>
                                {
                                  section.data.map((item) => (<TableHeaderColumn>{Object.keys(item)[0]}</TableHeaderColumn>))
                                }
                              </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={
                              tableSettings.displayRowCheckbox }>
                              <TableRow selectable={ tableSettings.selectable }>
                                <TableRowColumn>{section.year + "/" + section.month}</TableRowColumn>
                                {
                                  section.data.map((item) => (<TableRowColumn>{item[Object.keys(item)[0]]}</TableRowColumn>))
                                }
                              </TableRow>
                            </TableBody>
                          </Table>
                        );
                    });

    return (
        <div>
          <FullWidthSection>
            <center>
              <TextField ref="monthParam" hintText="日期格式: 2015/01"/>
              <RaisedButton
                label="Get Month"
                onClick={this.handleGetMonth}
                primary
              />
            </center>
              { table }
            <RaisedButton
              style={ styles.submitBtn }
              label="Submit"
              onClick={this.handleSubmit}
              secondary
            />

          <h1>{this.props.payment.message}</h1>


            {userTable}
          </FullWidthSection>
        </div>
          );
  }
}


export default connect(state => ({
    payment: state.payment,
    login: state.login,
}))(Payment);
