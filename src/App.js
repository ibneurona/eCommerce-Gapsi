import React from 'react';
import Login from './pages/Login';
import Tienda from './pages/Tienda';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar/>
        <br/>
          <Switch>
            <Route path="/tienda">
              <Tienda/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>
            
            <Route path="/">
              <div className="d-flex my-5">
                <Link className="mx-auto" to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </div>
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
