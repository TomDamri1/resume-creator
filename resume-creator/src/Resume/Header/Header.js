import React from 'react'

export default function Header(props) {
    let {basicDetails , communicationDetails} = props;
    if( basicDetails === undefined || communicationDetails === undefined){
        basicDetails= {
            firstName : 'John',
            lastName: 'Doe',
            email : 'JohnDoe@email.com',
            jobTitle:'Developer',
        }
        communicationDetails={
            phoneNumber:'054-444-4475'
        }
    }
    return (
        <div>
            <h1>{basicDetails.firstName} {basicDetails.lastName}</h1>
            <p>{basicDetails.jobTitle}    |    {communicationDetails.phoneNumber}</p>
        </div>
    )
}
