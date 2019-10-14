import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import UserDetails from './Form/UserDetails';
import GetStarted from './Form/GetStarted'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route
              exact path='/' 
              render={()=> 
                <GetStarted/>
              }
          />
          <Route 
              exact path='/form/userdetails' 
              render={()=> 
                  <UserDetails/>
              }
          />
        </Switch> 
    </div>
  );
}

export default App;
