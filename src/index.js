import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const AppTwo = () => {
  return (
    <p>
      Hola, esta es mi React App original
    </p>
  )
};

ReactDOM.render(
  <div>
    <App />,
    <AppTwo />,
  </div>,
  document.getElementById('root')
);
