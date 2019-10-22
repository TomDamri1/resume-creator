import React from 'react'

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
}
