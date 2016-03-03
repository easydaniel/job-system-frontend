import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FullWidthSection from '../components/FullWidthSection.jsx';
import LinearProgress from 'material-ui/lib/linear-progress';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import * as PaymentAction from '../actions/Payment.js';


class Payment extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.getReport = this.getReport.bind(this);
    this.getReport();
  }

  getReport() {
    this.props.dispatch(PaymentAction.getReport());
  }

  render() {
    const tableHeader = ['學號', '姓名', '局號', '帳號', '原始值班時數', '原始job時數', 'schedule時數', '基本薪', '時薪', 'other', '上月', '總結', '報支', '下月'];
    const data = this.props.payment.report;
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
                        row.total = row.base + row.salary * row.schedule + row.prev + row.other;
                        row.next = row.total - row.pay;
                        return (
                              <TableRow>
                                <TableRowColumn>{row.studentId}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.postAccount}</TableRowColumn>
                                <TableRowColumn>{row.account}</TableRowColumn>
                                <TableRowColumn>{row.originDesk}</TableRowColumn>
                                <TableRowColumn>{row.originJobs}</TableRowColumn>
                                <TableRowColumn>{row.schedule}</TableRowColumn>
                                <TableRowColumn>{row.base}</TableRowColumn>
                                <TableRowColumn>{row.salary}</TableRowColumn>
                                <TableRowColumn>{row.other}</TableRowColumn>
                                <TableRowColumn>{row.prev}</TableRowColumn>
                                <TableRowColumn>{row.total}</TableRowColumn>
                                <TableRowColumn>{row.pay}</TableRowColumn>
                                <TableRowColumn>{row.next}</TableRowColumn>
                              </TableRow>
                              );
                    })
                }
              </TableBody>
            </Table>
          </FullWidthSection>
          );
  }
}


export default connect(state => ({
    payment: state.payment,
}))(Payment);
