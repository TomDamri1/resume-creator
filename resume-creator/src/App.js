import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import FormBasicDetails from './Form/FormBasicDetails';
import GetStarted from './Form/GetStarted';
import CommunicationDetails from './Form/FormCommunicationDetails';
import BirthAndNationalityDetails from './Form/FormBirthAndNationalityDetails'
import ExperienceDetails from './Form/FormEmploymentHistory';
import WorkPlacesList from './Form/WorkPlaces/WorkPlacesList';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route
              exact path='/' 
              render={(props)=> 
                <GetStarted {...props}/>
              }
          />
          <Route 
              exact path='/form/basicDetails' 
              render={(props)=> 
                  <FormBasicDetails {...props}/>
              }
          />
          <Route 
              exact path='/form/CommunicationDetails' 
              render={(props)=> 
                  <CommunicationDetails {...props}/>
              }
          />
          <Route 
              exact path='/form/BirthAndNationalityDetails' 
              render={(props)=> 
                  <BirthAndNationalityDetails {...props}/>
              }
          />
           <Route 
              exact path='/form/EmploymentHistory' 
              render={(props)=> 
                  <ExperienceDetails {...props}/>
              }
          />
          <Route 
              exact path='/tryThings' 
              render={()=> 
                  <WorkPlacesList/>
              }
          />
        </Switch> 
    </div>
  );
}

export default App;
