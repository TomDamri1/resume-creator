import React from 'react'
import SideBarHeader from '../SideBarHeader'
import SkillBar from '../Skills/SkillBar/SkillBar'
export default function Languages(props) {
    const {birthAndNationalityDetails} = props;
    const {languages} = birthAndNationalityDetails;
    let lanList = [];
    for (const key in languages) {
        if (languages.hasOwnProperty(key)) {
            const element = languages[key];
            lanList.push(element);
        }
    }
    return(
        <div>
            <SideBarHeader text='Languages'/>
            {
                lanList.map(lan => (
                    <SkillBar type={lan.type} level={lan.level} />
                ))
            }
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