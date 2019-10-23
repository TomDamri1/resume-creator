import React from 'react'
import useStyles from './MainStyles';

import Profile from './Profile/Profile'
import EmploymentHistory from './EmploymentHistory/EmploymentHistory'
import Education from './Education/Education'

export default function Main(props) {
    const classes = useStyles();
    console.log(classes)
    return (
        <div className={classes.root}>
            <div className={classes.profile}>
                <Profile/>
            </div>
            <div className={classes.history}>
                <EmploymentHistory/>
            </div>
            <div className={classes.education}>
                <Education/>
            </div>
        </div>
    )
}
