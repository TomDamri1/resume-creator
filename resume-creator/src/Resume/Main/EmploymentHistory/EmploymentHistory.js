import React from 'react'
import MainHeader from '../MainHeader'
import employmentHistoryPic from '../icons/employmentHistory.png';

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
        <div>
            <MainHeader img={employmentHistoryPic} text={'EMPLOYMENT HISTORY'}/>
            <p>
            {
                employmentHistoryList.map(item => (
                    <li>
                        {item.title} at {item.place}.<br/>
                        {item.start} - {item.end}
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