import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Area1 from './practiceAreas/1'
import Area2 from './practiceAreas/2'
import Area3 from './practiceAreas/3'
import Area4 from './practiceAreas/4'
import Area5 from './practiceAreas/5'
import Area6 from './practiceAreas/6'
import Area7 from './practiceAreas/7'

class PracticeAreas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "1" }
  }
  handleButton(area) {
    switch(area) {
      case "1": this.setState({ value: area })
        break;
      case "2": this.setState({ value: area })
        break;
      case "3": this.setState({ value: area })
        break;
      case "4": this.setState({ value: area })
        break;
      case "5": this.setState({ value: area })
        break;
      case "6": this.setState({ value: area })
        break;
      case "7": this.setState({ value: area })
        break;
      default: console.log('default case');
    }
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-9">
          <PAContent area={this.state.value} />
        </div>
        <div className="col-md-3">
          <FlatButton onClick = {() => {this.handleButton("1")}}>Federal & State Fraud/Evasion</FlatButton>
          <FlatButton onClick = {() => {this.handleButton("2")}}>Tax Controversy Practice</FlatButton>
          <FlatButton onClick = {() => {this.handleButton("3")}}>Employment Tax Audit (Federal & State)</FlatButton>
          <FlatButton onClick = {() => {this.handleButton("4")}}>Business Formation & Tax Planning</FlatButton>
          <FlatButton onClick = {() => {this.handleButton("5")}}>CA Residency Source of Income Audits</FlatButton>
          <FlatButton onClick = {() => {this.handleButton("6")}}>International Taxation</FlatButton>
          <FlatButton onClick = {() => {this.handleButton("7")}}>Trusts & Estates</FlatButton>
        </div>
      </div>
    )
  }
}

// Sets Main Content based on Header button clicks
const PAContent = ({area}) => {
  switch(area) {
    case "1": return <Area1 />
    case "2": return <Area2 />
    case "3": return <Area3 />
    case "4": return <Area4 />
    case "5": return <Area5 />
    case "6": return <Area6 />
    case "7": return <Area7 />
    default: console.log('default case');
  }
}

export default PracticeAreas