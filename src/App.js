import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

const App = () => {
  return <Home />;
};

render(React.createElement(App), document.getElementById('root'));
