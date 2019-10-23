import React from 'react'
import SideBarHeader from '../SideBarHeader'

export default function Skills(props) {
    return(
        <div>
            <SideBarHeader text='Skills'/>
        </div>
    )
}

/**
 * 
 const {skills} = props;
    let skillList = [];
    for (const key in skills) {
        if (skills.hasOwnProperty(key)) {
            const element = skills[key];
            skillList.push(element)
        }
    }
    return (
        <div>
            {
                skillList.map(skill => (
                    <li>
                        type  : {skill.type} <br/>
                        level : {skill.level}
                    </li>
                ))
            }
        </div>
    )
 */