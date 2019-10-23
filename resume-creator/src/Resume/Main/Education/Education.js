import React from 'react'
import education from '../icons/education.png'
import MainHeader from '../MainHeader'

export default function Education(props) {
    return(
        <div>
            <MainHeader img={education} text={'EDUCATION'}/>
        </div>
    )
}


/**
 
const {educationDetails} = props;
    let educationList =[];
    for (const key in educationDetails) {
        if (educationDetails.hasOwnProperty(key)) {
            const element = educationDetails[key];
            educationList.push(element);
        }
    }
    console.log(educationList);
    return (
        <div>
            {
                educationList.map(item => (
                    <li>
                        {item.title}, {item.place}<br/>
                        {item.start} - {item.end}<br/>
                        Degree: {item.degree}
                    </li>
                ))
            }
        </div>
    )


 */