import React from 'react'
import SideBarHeader from '../SideBarHeader'
export default function Languages(props) {
    return(
        <div>
            <SideBarHeader text='Languages'/>
        </div>
    )
}


/**
 * 
 const {birthAndNationalityDetails} = props;
    const {languages} = birthAndNationalityDetails;
    let lanList = [];
    for (const key in languages) {
        if (languages.hasOwnProperty(key)) {
            const element = languages[key];
            lanList.push(element);
        }
    }
    return (
        <div>
            {
                lanList.map(lan => (
                    <li>
                        name : {lan.type} <br/>
                        level : {lan.level}
                    </li>
                ))
            }
        </div>
    )
 */