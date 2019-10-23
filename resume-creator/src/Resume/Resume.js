import React from 'react'

//my components
import Header from './Header/Header'
import Languages from './SideBar/Languages/Languages'
import EmploymentHistory from './EmploymentHistory/EmploymentHistory'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Profile from './Profile/Profile'


export default function Resume(props) {
    const {context} = props;
    const {
            basicDetails, 
            communicationDetails ,
            birthAndNationalityDetails , 
            employmentHistory ,
            educationDetails ,  
            skills,
            profile,
        } = context.state;
    console.log(profile)
    return (
        <div>
            <h1>Tom Damri</h1>

        </div>
    )
}


//header
//<Header basicDetails={basicDetails} communicationDetails={communicationDetails}/>

//langs
//<Languages birthAndNationalityDetails={birthAndNationalityDetails}/>

//emphistory
//<EmploymentHistory employmentHistory={employmentHistory}/>

//education
//<Education educationDetails={educationDetails}/>

//skills
//<Skills skills={skills}/>

//profile
//<Profile profile={profile}/>

/* all together
<Header basicDetails={basicDetails} communicationDetails={communicationDetails}/>
<Languages birthAndNationalityDetails={birthAndNationalityDetails}/>
<EmploymentHistory employmentHistory={employmentHistory}/>
<Education educationDetails={educationDetails}/>
<Education educationDetails={educationDetails}/>
<Skills skills={skills}/>
<Profile profile={profile}/>

*/
