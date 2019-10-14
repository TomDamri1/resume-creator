import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import FormBasicDetails from './Form/FormBasicDetails';
import GetStarted from './Form/GetStarted';
import CommunicationDetails from './Form/FormCommunicationDetails';
import BirthAndNationalityDetails from './Form/FormBirthAndNationalityDetails'

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
              exact path='/form/basicDetails' 
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
          <Route 
              exact path='/form/BirthAndNationalityDetails' 
              render={()=> 
                  <BirthAndNationalityDetails/>
              }
          />
        </Switch> 
    </div>
  );
}

export default App;
