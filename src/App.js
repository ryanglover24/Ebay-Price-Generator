import React from 'react';
import NavBar from './components/display/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar   />
        <Switch>
          <Route path="/" component={DashBoard} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
