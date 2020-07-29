import React from 'react'
import { TextField } from '@material-ui/core';
export default function Station(props) {
    const handleStationChange = (e) => {
        props.handleStationChange(props.id,e.target.value);
    }
    
    return (
        <TextField
            id={props.station}
            key={props.index}
            name={props.index} 
            label={`Station #${props.index+1}`}
            multiline
            rows="3"
            margin="normal"
            variant="outlined"
            style={{width : 650, marginLeft:50}}
            onChange={handleStationChange}
        />
    )
}
