import React from 'react'
import icon from '../icons/profile.png'
import MainHeader from '../MainHeader'
/**
 * 
 * @param {*} props 
 */
export default function Profile(props) {
    const {profile} = props;
    const {bio , stations} = profile;
    let stationList = [];
    for (const key in stations) {
        if (stations.hasOwnProperty(key)) {
            const element = stations[key];
            stationList.push(element)
        }
    }
    return(
        <div style={{textAlign:'left' ,padding:10}}>
            <MainHeader img={icon} text='PROFILE'/>
            <div style={{borderLeft:'2px solid black' ,marginLeft:30}}>
            <p style={{marginLeft:40}}>
                {bio}
            </p>
            <ul style={{marginLeft:20 }}>
            {
                
                stationList.map(station =>(
                    <li style={{listStylePosition:'outside'}}>
                        {station}
                    </li>
                ))
            
            }
            </ul>
            </div>

        </div>
    )
}






















/**
 * functional profile:

 const {profile} = props;
    const {bio , stations} = profile;
    let stationList = [];
    for (const key in stations) {
        if (stations.hasOwnProperty(key)) {
            const element = stations[key];
            stationList.push(element)
        }
    }

    return (
        <div>
            <p>{bio}</p>
            {
                stationList.map(station =>(
                    <li>
                        {station}
                    </li>
                ))
            }
        </div>
    )





 */