import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/footer';
import './style.css';
import './bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <header>
      	<h1>Escatel Tax Law</h1>
      	<button>Home</button>
      	<button>About</button>
      	<button>Practice Areas</button>
      	<button>Contact Us</button>
      </header>
      <div className="slider"><h1>Slider</h1></div>
      <main>Main</main>
      <aside>Links</aside>
      <Footer />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
