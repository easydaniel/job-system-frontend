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
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

import * as PaymentAction from '../actions/PaymentAction.js';


class Payment extends Component {

  constructor(props) {
    super(props);
    // console.log(this.state);
    this.state = {
      open: false,
    };
    this.getReport = this.getReport.bind(this);
    this.refineReport = this.refineReport.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getReport();
    this.refineReport();
  }

  refineReport() {
    this.props.dispatch(PaymentAction.refineReport());
  }
  getReport() {
    this.props.dispatch(PaymentAction.getReport());
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const tableHeader = ['學號', '姓名', '局號', '帳號', '原始值班時數', '原始job時數', 'schedule時數', '基本薪', '時薪', 'other', '上月', '總結', '報支', '下月'];
    const data = this.props.payment.report;
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
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
                                <TableRowColumn onClick={this.handleOpen}>{row.other}</TableRowColumn>
                                <TableRowColumn>{row.prev}</TableRowColumn>
                                <TableRowColumn>{row.total}</TableRowColumn>
                                <TableRowColumn onClick={this.handleOpen}>{row.pay}</TableRowColumn>
                                <TableRowColumn>{row.next}</TableRowColumn>
                              </TableRow>
                              );
                    })
                }
              </TableBody>
            </Table>
            <RaisedButton
              label="change"
              style={{ margin: 12 }}
              onClick={this.refineReport}
              secondary
            />
            <RaisedButton
              label="open"
              style={{ margin: 12 }}
              onClick={this.handleOpen}
              secondary
            />
            <Dialog
              title="請輸入欲更改的數字"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <TextField
                hintText="輸入更新值"
                defaultValue="Default Value"
              />
            </Dialog>
          </FullWidthSection>
          );
  }
}


export default connect(state => ({
    payment: state.payment,
}))(Payment);
