import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';

// Set up pages using the React Router Link element for navigation - instead of <a></a>
const App = () => (
  <main>
    <h1>React Router</h1>

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
