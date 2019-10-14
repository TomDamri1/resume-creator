import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import FormBasicDetails from './Form/FormBasicDetails';
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
              exact path='/form/basicdetails' 
              render={()=> 
                  <FormBasicDetails/>
              }
          />
        </Switch> 
    </div>
  );
}

export default App;
