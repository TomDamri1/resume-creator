import React from 'react'

export default function EmploymentHistory(props) {
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
}
