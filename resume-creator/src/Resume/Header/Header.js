import React from 'react'

export default function Header(props) {
    const {basicDetails , communicationDetails} = props;
    return (
        <div>
            <h1>{basicDetails.firstName} {basicDetails.lastName}</h1>
            <p>{basicDetails.email} {basicDetails.jobTitle}</p>
            <p>{communicationDetails.phoneNumber}</p>
        </div>
    )
}
