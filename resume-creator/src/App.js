import React, { useContext } from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';

//Context
import {MyContext , MyProvider } from './Context/Context';

//My Components
import FormBasicDetails from './Form/BasicDetails/FormBasicDetails';
import GetStarted from './Form/GetStarted';
import CommunicationDetails from './Form/CommunicationDetails/FormCommunicationDetails';
import BirthAndNationalityDetails from './Form/BirthAndNationality/FormBirthAndNationalityDetails';
import ExperienceDetails from './Form/EmploymentHistory/FormEmploymentHistory';
import EducationDetails from './Form/Education/FormEducationDetails';
import Skills from './Form/Skills/FormSkills';
import Profile from './Form/Profile/FormProfile';
import Resume from './Resume/Resume';


function App() {
    const context = useContext(MyContext);
  return (
    <div className="App">
        <Switch>
          <Route
              exact path='/' 
              render={(props)=> 
                <GetStarted {...props} context={context}/>
              }
          />
          <Route 
              exact path='/form/basicDetails' 
              render={(props)=> 
                  <FormBasicDetails {...props} context={context}/>
              }
          />
          <Route 
              exact path='/form/CommunicationDetails' 
              render={(props)=> 
                  <CommunicationDetails {...props} context={context}/>
              }
          />
          <Route 
              exact path='/form/BirthAndNationalityDetails' 
              render={(props)=> 
                  <BirthAndNationalityDetails {...props} context={context}/>
              }
          />
           <Route 
              exact path='/form/EmploymentHistory' 
              render={(props)=> 
                  <ExperienceDetails {...props} context={context}/>
              }
          />
          <Route 
              exact path='/form/EducationDetails' 
              render={(props)=> 
                  <EducationDetails {...props} context={context}/>
              }
          />
          <Route 
              exact path='/form/Skills' 
              render={(props)=> 
                  <Skills {...props} context={context}/>
              }
          />
          <Route 
              exact path='/form/Profile' 
              render={(props)=> 
                  <Profile {...props} context={context}/>
              }
          />
          <Route 
              exact path='/Resume' 
              render={(props)=> 
                 <Resume {...props} context={context}/>
              }
          />
        </Switch> 
    </div>
  );
}

export default App;
