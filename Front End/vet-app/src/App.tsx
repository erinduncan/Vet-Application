import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './utilites/history';
import { PetTableComponent } from './components/pet-components/PetTableComponent';


function App() {
  return (
    <div className="mainPage">
      <Router history={history}>
        <Route path="/pet" component={PetTableComponent}/>
      </Router>
    </div>
  );
}

export default App;
