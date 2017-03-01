import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import Slideshow from './Components/slider';
import Home from './Components/home';
import Footer from './Components/footer';
import './style.css';
import './bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
    	<Header />
    	<Slideshow />
    	<Home />
    	<Footer />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
