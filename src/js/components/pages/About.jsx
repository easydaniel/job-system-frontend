import React from 'react';
import FullWidthSection from '../FullWidthSection.jsx';
import { List, ListItem ,RaisedButton } from 'material-ui';

class About extends React.Component {

    constructor(props){
      super(props);
      this.onChange = this.onChange.bind(this);
      this.state = {
          allInfo: [],
      }
    }

    onChange() {
      console.log('Change!!');
    }

    handleGetInfo(){
      console.log('handleGetInfo!!');
    }

    render() {
      const InfoList = this.state.allInfo.map((data, index) => {
        const name = `${data.fname} ${data.lname}`;
        return (<div key={index}><RaisedButton label={name} secondary={true} /></div>)
      });
      return (
        <FullWidthSection>
          <h1>About</h1>
          <RaisedButton label='Get Info' primary={true}
            onTouchTap={this.handleGetInfo.bind(this)}
          />
          { InfoList }
        </FullWidthSection>
      );
    }
}
export default About;
