import React from 'react'
import uuidv4 from 'uuid/v4';

//demo
import demo from './demoResume'

//my components
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Main from './Main/Main'

//styles
import useStyles from './ResumeStyles';
import isDemo from './constDemo';

export default function Resume(props) {
    const classes = useStyles();
    console.log(classes)
    const {context} = props;
    // let {
    //     basicDetails, 
    //     communicationDetails ,
    //     birthAndNationalityDetails , 
    //     employmentHistory ,
    //     educationDetails ,  
    //     skills,
    //     profile,
    // } = demo;
    // if(!isDemo){
    const {
            basicDetails, 
            communicationDetails ,
            birthAndNationalityDetails , 
            employmentHistory ,
            educationDetails ,  
            skills,
            profile,
        } = context.state;
    console.log("==================")    
    console.log(context.state)
    console.log("==================")    
    return (
        <div className={classes.root} >
            <div className={classes.header}>
                <Header basicDetails={basicDetails} communicationDetails={communicationDetails}/>
            </div>
            <div className={classes.sideBar}>
               <SideBar 
                    key = {uuidv4()}
                    basicDetails={basicDetails} 
                    communicationDetails={communicationDetails} 
                    birthAndNationalityDetails={birthAndNationalityDetails}
                    skills={skills}
                />
            </div>
            <div className={classes.mainBar}>
                <Main 
                    key = {uuidv4()}
                    profile={profile} 
                    employmentHistory={employmentHistory} 
                    educationDetails={educationDetails}
                />
            </div>
            <div className={classes.footer}>
                
            </div>

        </div>
    )
}

