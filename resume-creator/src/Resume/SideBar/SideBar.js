import React from 'react'
import useStyles from './SideBarStyles';

import Details from './Details/Details'
import Languages from './Languages/Languages'
import Skills from './Skills/Skills'

export default function SideBar(props) {
    const classes = useStyles();
    const {
            basicDetails ,
            communicationDetails ,
            birthAndNationalityDetails,
            skills,
        } = props

    return (
        <div className={classes.root}>
            <div className={classes.details}>
                <Details
                    basicDetails={basicDetails} 
                    communicationDetails={communicationDetails} 
                    birthAndNationalityDetails={birthAndNationalityDetails}
                />
            </div>
            <div className={classes.skills}>
                <Skills skills={skills}/>
            </div>
            <div className={classes.languages}>
                <Languages/>
            </div>
        </div>
    )
}
