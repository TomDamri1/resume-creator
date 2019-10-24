import React from 'react'

//my components
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Main from './Main/Main'

//styles
import useStyles from './ResumeStyles';


export default function Resume(props) {
    const classes = useStyles();
    console.log(classes)
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
        <div className={classes.root} >
            <div className={classes.header}>
                <Header basicDetails={basicDetails} communicationDetails={communicationDetails}/>
            </div>
            <div className={classes.sideBar}>
               <SideBar 
                    basicDetails={basicDetails} 
                    communicationDetails={communicationDetails} 
                    birthAndNationalityDetails={birthAndNationalityDetails}
                    skills={skills}
                />
            </div>
            <div className={classes.mainBar}>
                <Main 
                    profile={profile} 
                    employmentHistory={employmentHistory} 
                    educationDetails={educationDetails}
                />
            </div>
            <div className={classes.footer}>
                Footer
            </div>

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
