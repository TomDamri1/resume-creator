import React from 'react'
import MainHeader from '../MainHeader'
import employmentHistory from '../icons/employmentHistory.png';

export default function EmploymentHistory(props) {
    return(
        <div>
            <MainHeader img={employmentHistory} text={'EMPLOYMENT HISTORY'}/>
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