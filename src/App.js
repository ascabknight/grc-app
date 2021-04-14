import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';
import { Wizard } from './pages/Wizard';
import NavBar from './components/NavBar';
import { GlobalStyles } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

// Set up pages using the React Router Link element for navigation - instead of <a></a>
const App = () => (
  <main>
    <GlobalStyles />
    <NavBar />
    <div className="main-content">
      <Route exact path="/" component={Home} />
      <Route path="/wizard" component={Wizard} />
    </div>
  </main>
);

//Render app into the root HTML DOM node
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'
);
