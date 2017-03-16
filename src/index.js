import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import Slideshow from './slider'
import Home from './home';
import About from './about';
import PracticeAreas from './practiceAreas';
import Contact from './contact';
import Footer from './footer';
import './css/bootstrap.css';
import './font-awesome/css/font-awesome.min.css'
// import './css/style.css';
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
      case "practiceAreas": this.setState({ value: name })
        break;
      case "Contact": this.setState({ value: name })
        break;
      default: console.log('default case');
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          
          <header id="header" className="container-fluid navbar-fixed-top initial">
            <div className="container">
              
              <span className="col-md-4">
                <h3>Escatel Tax Law</h3>
                <h5>{this.state.value}</h5>
              </span>
              
              <div className="col-md-8 text-right">
                <nav>
                  <FlatButton id="Home" onClick = {() => {this.handleButton("Home")}}><i className="fa fa-home fa-2x" aria-hidden="true"></i></FlatButton>
                  <FlatButton id="About" onClick = {() => {this.handleButton("About")}}>About</FlatButton>
                  <FlatButton id="practiceAreas" onClick = {() => {this.handleButton("practiceAreas")}}>Practice Areas<i className="fa fa-caret-down" aria-hidden="true"></i></FlatButton>
                  <FlatButton id="Contact" onClick = {() => {this.handleButton("Contact")}}>Contact</FlatButton>
                </nav>
                
                <a href="#" style={{display: 'none'}}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a>
                
                <div className="dropdown">
                  <FlatButton label="Federal & State Fraud/Evasion" />
                  <FlatButton label="Tax Controversy Practice" />
                  <FlatButton label="Employment Tax Audit (Federal & State)" />
                  <FlatButton label="Business Formation & Tax Planning" />
                  <FlatButton label="CA Residency Source of Income Audits" />
                  <FlatButton label="International Taxation" />
                  <FlatButton label="Trusts & Estates" />
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
    case "practiceAreas": return <PracticeAreas />
    case "Contact": return <Contact />
    default: console.log('default case');
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
