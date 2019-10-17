import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import FormBasicDetails from './Form/BasicDetails/FormBasicDetails';
import GetStarted from './Form/GetStarted';
import CommunicationDetails from './Form/CommunicationDetails/FormCommunicationDetails';
import BirthAndNationalityDetails from './Form/BirthAndNationality/FormBirthAndNationalityDetails';
import ExperienceDetails from './Form/EmploymentHistory/FormEmploymentHistory';
import EducationDetails from './Form/Education/FormEducationDetails';
import Skills from './Form/Skills/FormSkills';
import Profile from './Form/Profile/FormProfile';

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
              exact path='/form/EducationDetails' 
              render={(props)=> 
                  <EducationDetails {...props}/>
              }
          />
          <Route 
              exact path='/form/Skills' 
              render={(props)=> 
                  <Skills {...props}/>
              }
          />
          <Route 
              exact path='/form/Profile' 
              render={(props)=> 
                  <Profile {...props}/>
              }
          />
          <Route 
              exact path='/tryThings' 
              render={(props)=> 
                 <h1>trying</h1>
              }
          />
        </Switch> 
    </div>
  );
}

export default App;
