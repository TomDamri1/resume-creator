import React from 'react'
import education from '../icons/education.png'
import MainHeader from '../MainHeader'
import uuidv4 from 'uuid/v4'

export default function Education(props) {
    const {educationDetails} = props;
    let educationList =[];
    for (const key in educationDetails) {
        if (educationDetails.hasOwnProperty(key)) {
            const element = educationDetails[key];
            educationList.push(element);
        }
    }
    return(
        <div style={{textAlign:'left', padding:10}}>
            <MainHeader img={education} text={'EDUCATION'}/>
            <p key = {uuidv4()} style={{borderLeft:'2px solid black', marginLeft:25}}>
            {
                educationList.map(item => (
                    <li key={uuidv4()} style={{fontWeight:'bold', marginLeft:20}}>
                        {item.title}, {item.place}
                        <section style={{ fontWeight:'100'}}>{item.start} - {item.end}</section>
                        Degree: {item.degree}
                    </li>
                ))
            }
            </p>
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