import React from 'react'
import SideBarHeader from '../SideBarHeader'
import SkillBar from './SkillBar/SkillBar'

export default function Skills(props) {
    const {skills} = props;
    let skillList = [];
    for (const key in skills) {
        if (skills.hasOwnProperty(key)) {
            const element = skills[key];
            skillList.push(element)
        }
    }
    console.log(skillList)
    /*
    skillList = [
        {type: 'Java' , level:'80'},
        {type: 'Python' , level:'80'},
        {type: 'Windows' , level:'80'},
        {type: 'Java' , level:'80'},
        {type: 'Python' , level:'80'},
        {type: 'Windows' , level:'80'},
        {type: 'Java' , level:'80'},
        {type: 'Python' , level:'80'},
        {type: 'Windows' , level:'80'},
    ]
    */
    return(
        <div>
            <div>
                <SideBarHeader text='Skills'/>
            </div>
            <div style={{  
                marginRight:20,
                display: 'flex',
                flexDirection: 'column',
                flexBasis: '100%',
                flex: 1,
                alignItems:'center',
                }}>

                {
                skillList.map(skill => (
                    <SkillBar type={skill.type} level={skill.level}/>
                ))
                }
                
            </div>
        </div>
    )
}

