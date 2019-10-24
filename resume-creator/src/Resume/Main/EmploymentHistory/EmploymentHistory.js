import React from 'react'
import MainHeader from '../MainHeader'
import employmentHistoryPic from '../icons/employmentHistory.png';
import './EmploymentHistory.css'

export default function EmploymentHistory(props) {
    const {employmentHistory} = props
    const employmentHistoryList = [];
    for (const key in employmentHistory) {
        if (employmentHistory.hasOwnProperty(key)) {
            const element = employmentHistory[key];
            employmentHistoryList.push(element)
        }
        console.log(employmentHistoryList)
    }
    
    return(
        <div style={{textAlign:'left', padding:10}}>
            <MainHeader img={employmentHistoryPic} text={'EMPLOYMENT HISTORY'}/>
            <p style={{borderLeft:'2px solid black', marginLeft:25}}>
            {
                employmentHistoryList.map(item => (

                    <li style={{fontWeight:'bold', marginLeft:20}}>
                        {item.title} at {item.place}
                        <section style={{fontWeight:'100'}}>{item.start} - {item.end}</section>
                    </li>
                ))
            }
            </p>
        </div>
    )
    
}


/**
 * 
 const {employmentHistory} = props;
    const employmentHistoryList = [];
    for (const key in employmentHistory) {
        if (employmentHistory.hasOwnProperty(key)) {
            const element = employmentHistory[key];
            employmentHistoryList.push(element)
        }
        console.log(employmentHistoryList)
    }
    return (
        <div>
            {
                employmentHistoryList.map(item => (
                    <li>
                        {item.title} at {item.place}.<br/>
                        {item.start} - {item.end}
                    </li>
                ))
            }
        </div>
    )
 */