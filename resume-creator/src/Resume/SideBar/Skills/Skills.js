import React from 'react'
import SideBarHeader from '../SideBarHeader'
import SkillBar from './SkillBar/SkillBar'
import uuidv4 from 'uuid/v4'

export default function Skills(props) {
    const {skills} = props;
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
                skills.map(skill => (
                    <SkillBar key={uuidv4()} type={skill.skillName} level={skill.skillLevel}/>
                ))
                }
                
            </div>
        </div>
    )
}

