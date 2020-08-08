import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyles } from './styles'

// Set up pages using the React Router Link element for navigation - instead of <a></a>
const App = () => (
  <main>
    <GlobalStyles />
    <NavBar />
    <div>
      <Route exact path='/' component={Home} />
    </div>
  </main>
)


//Render app into the root HTML DOM node
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
