import React from 'react'

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
}
