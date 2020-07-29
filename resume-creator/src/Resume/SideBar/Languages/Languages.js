import React from 'react'
import SideBarHeader from '../SideBarHeader'
import SkillBar from '../Skills/SkillBar/SkillBar'
import uuidv4 from 'uuid/v4';
export default function Languages(props) {
    const { birthAndNationalityDetails } = props;
    const { languages } = birthAndNationalityDetails;
    return (
        <div>
            <SideBarHeader text='Languages' />
            <div style={{
                marginRight: 20,
                display: 'flex',
                flexDirection: 'column',
                flexBasis: '100%',
                flex: 1,
                alignItems: 'center',
            }}>
                {
                    languages.map(lan => (
                        <SkillBar key={uuidv4()} type={lan.languageName} level={lan.languageLevel} />
                    ))
                }
            </div>
        </div>
    )
}
