import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import UserDetails from './Form/UserDetails';
import GetStarted from './Form/GetStarted'
import { FormProvider } from './Form/FormContext';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Switch>
          <Route
              exact path='/form/getStarted' 
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
      </FormProvider>
    </div>
  );
}

export default App;
