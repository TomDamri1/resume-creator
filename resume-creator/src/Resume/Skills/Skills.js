import React from 'react'

export default function Skills(props) {
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
}
