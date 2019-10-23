import React from 'react'
import SideBarHeader from '../SideBarHeader'

export default function Details(props) {
    const {basicDetails , communicationDetails ,birthAndNationalityDetails} = props
    //not real:
    /*
    return (
        <div>
            <SideBarHeader text='Details'/>
            <div style={{marginRight:20 , marginBottom:20}}>
                <section>yeriho 21, beersheva,israel</section>
                <section>054-444-4475</section>
                <section>JohnDoe@email.com</section>
            </div>
            <div style={{marginRight:20 ,marginBottom:20}}>
                <section>Date/Place of Birth</section>
                <section>1994-10-13</section>
                <section>beersheva</section>
            </div>
            <div style={{marginRight:20}}>
                <section>nationality</section>
                <section>israeli</section>
            </div>
        </div>
    )
    */
    

    //real
    console.log(basicDetails )
    console.log(communicationDetails )
    console.log(birthAndNationalityDetails)
    return(
        <div>
            <SideBarHeader text='Details'/>
            <div style={{marginRight:20 , marginBottom:20}}>
                <section>{communicationDetails.streetAddress}
                , {communicationDetails.city}
                , {communicationDetails.country}</section>
                <section>{communicationDetails.phoneNumber}</section>
                <section>{basicDetails.email}</section>
            </div>
            <div style={{marginRight:20 ,marginBottom:20}}>
                <section>Date/Place of Birth</section>
                <section>{birthAndNationalityDetails.birthdate}</section>
                <section>{birthAndNationalityDetails.birthPlace}</section>
            </div>
            <div style={{marginRight:20}}>
                <section>nationality</section>
                <section>{birthAndNationalityDetails.nationality}</section>
            </div>
        </div>
    )
}
