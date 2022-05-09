import React from 'react';
import './App.css';

const SecretComponent = () => {
  return (
  <h1>
    Secret information for authorized users only
  </h1>
  )
};

const RegularComponent = () => {
  return (
    <h1>
      Everyone can see this Component
    </h1>
  )
};

const App = (authorized) => {
  return (
    <React.Fragment>
      { authorized 
        ? <SecretComponent /> 
        : <RegularComponent />
      }
    </React.Fragment>
  );
}

export default App;
