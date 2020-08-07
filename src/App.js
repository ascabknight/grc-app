import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tauruseer App</h1>
      </header>
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
