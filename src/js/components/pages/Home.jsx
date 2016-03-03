import React from 'react';
import FullWidthSection from '../FullWidthSection.jsx';
import logo from '../../../assets/images/nctu.gif';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

class Home extends React.Component {

  render() {
    const iconStyles = {
      marginRight: 24,
    };
    const data = [{
        studentId: '0000000',
        name: '王曉明',
        postAccount: '0101010',
        account: '1010101',
        originDesk: 10,
        originJobs: 10,
        schedule: 20,
        base: 10000,
        salary: 130,
        other: 100,
        prev: 100000,
        total: 100000,
        pay: 1000000,
        next: 1000000,
    }]
    const tableHeader = ['學號', '姓名', '局號', '帳號', '原始值班時數', '原始job時數', 'schedule時數', '基本薪', '時薪', 'other', '上月', '總結', '報支', '下月'];
    console.log(tableHeader.map((col) => (<TableHeaderColumn>{col}</TableHeaderColumn>)));
    return (
          <FullWidthSection>
          test
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
export default Home;
