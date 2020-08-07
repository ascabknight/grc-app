import React from 'react';
import { render } from 'react-dom';
import Home from './pages/Home';

const App = () => {
  return <Home />;
};

render(React.createElement(App), document.getElementById('root'));
