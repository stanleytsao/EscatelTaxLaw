import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import Slideshow from './slider'
import Home from './home';
import About from './about';
import Contact from './contact';
import Area1 from './practiceAreas/1';
import Area2 from './practiceAreas/2';
import Area3 from './practiceAreas/3';
import Area4 from './practiceAreas/4';
import Area5 from './practiceAreas/5';
import Area6 from './practiceAreas/6';
import Area7 from './practiceAreas/7';
import Footer from './footer';
import './css/bootstrap.css';
import './font-awesome/css/font-awesome.min.css'
import './css/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// Main Container for React-Dom rendering
class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'Home' }
  }
  handleButton(name) {
    switch(name) {
      case "Home": this.setState({ value: name })
        break;
      case "About": this.setState({ value: name })
        break;
      case "Contact": this.setState({ value: name })
        break;
      case "practiceArea1": this.setState({ value: name })
        break;
      case "practiceArea2": this.setState({ value: name })
        break;
      case "practiceArea3": this.setState({ value: name })
        break;
      case "practiceArea4": this.setState({ value: name })
        break;
      case "practiceArea5": this.setState({ value: name })
        break;
      case "practiceArea6": this.setState({ value: name })
        break;
      case "practiceArea7": this.setState({ value: name })
        break;
      default: console.log('default case');
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          
          <header id="header" className="container-fluid navbar-fixed-top">
            <div className="container">
              
              <span className="col-md-4">
                <h3>Escatel Tax Law</h3>
                <h5>{this.state.value}</h5>
              </span>
              
              <div className="col-md-8 text-right">
                <nav>
                  <FlatButton id="Home" onClick = {() => {this.handleButton("Home")}}><i className="fa fa-home fa-2x" aria-hidden="true"></i></FlatButton>
                  <FlatButton id="About" onClick = {() => {this.handleButton("About")}}>About</FlatButton>
                  <FlatButton id="practiceAreas">Practice Areas<i className="fa fa-caret-down" aria-hidden="true"></i></FlatButton>
                  <FlatButton id="Contact" onClick = {() => {this.handleButton("Contact")}}>Contact</FlatButton>
                </nav>
                
                <a href="#" style={{display: 'none'}}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a>
                
                <div className="dropdown">
                  <FlatButton onClick = {() => {this.handleButton("practiceArea1")}} label="Federal & State Fraud/Evasion" />
                  <FlatButton onClick = {() => {this.handleButton("practiceArea2")}} label="Tax Controversy Practice" />
                  <FlatButton onClick = {() => {this.handleButton("practiceArea3")}} label="Employment Tax Audit (Federal & State)" />
                  <FlatButton onClick = {() => {this.handleButton("practiceArea4")}} label="Business Formation & Tax Planning" />
                  <FlatButton onClick = {() => {this.handleButton("practiceArea5")}} label="CA Residency Source of Income Audits" />
                  <FlatButton onClick = {() => {this.handleButton("practiceArea6")}} label="International Taxation" />
                  <FlatButton onClick = {() => {this.handleButton("practiceArea7")}} label="Trusts & Estates" />
                </div>
              </div>
            
            </div>
          </header>

          <Slideshow />

          <main className="container">
            <MainContent name={this.state.value} />
          </main>

          <Footer />

        </div>
      </MuiThemeProvider>
    )
  }
}

// Sets Main Content based on Header button clicks
const MainContent = ({name}) => {
  switch(name) {
    case "Home": return <Home />
    case "About": return <About />
    case "practiceArea1": return <Area1 />
    case "practiceArea2": return <Area2 />
    case "practiceArea3": return <Area3 />
    case "practiceArea4": return <Area4 />
    case "practiceArea5": return <Area5 />
    case "practiceArea6": return <Area6 />
    case "practiceArea7": return <Area7 />
    case "Contact": return <Contact />
    default: console.log('default case');
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
