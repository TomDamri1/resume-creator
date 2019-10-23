import React from 'react'
import icon from '../icons/profile.png'
import MainHeader from '../MainHeader'
/**
 * 
 * @param {*} props 
 */
export default function Profile(props) {
    return(
        <div>
            <MainHeader img={icon} text='PROFILE'/>
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