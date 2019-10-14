import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import FormBasicDetails from './Form/FormBasicDetails';
import GetStarted from './Form/GetStarted';
import CommunicationDetails from './Form/FormCommunicationDetails';

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
          <Route 
              exact path='/form/CommunicationDetails' 
              render={()=> 
                  <CommunicationDetails/>
              }
          />
        </Switch> 
    </div>
  );
}

export default App;
