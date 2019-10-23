import React from 'react'
import useStyles from './SideBarStyles';

import Details from './Details/Details'
import Languages from './Languages/Languages'
import Skills from './Skills/Skills'

export default function SideBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.details}>
                <Details/>
            </div>
            <div className={classes.skills}>
                <Skills/>
            </div>
            <div className={classes.languages}>
                <Languages/>
            </div>
        </div>
    )
}
