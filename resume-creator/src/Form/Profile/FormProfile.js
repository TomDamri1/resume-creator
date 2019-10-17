import React ,{useState} from 'react'
import FormWraper from '../FormWraper'
import { TextField } from '@material-ui/core';
import {card_lg} from '../../consts';
import AddRemoveButtonBar from '../AddRemoveButtonBar';
import Button from '@material-ui/core/Button';

export default function FormProfile() {
    const [info, setInfo] = useState({
        bio:'',
        stations:['',''],
    })
    const addStation = () =>{
        setInfo({
            ...info,
            stations : [...info.stations,''],
        })
    }
    const removeStation = () =>{
        let tempStations = info.stations;
        tempStations.pop();
        setInfo({
            ...info,
            stations : [...tempStations],
        })
    }
    const title = 'Profile';
    const header = 'Enter your Work Profile and relevant job stations'
    return (
        <FormWraper title={title} header={header} width={card_lg}>
            <TextField
                id="outlined-multiline-static"
                label="Work Profile"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                style={{width : 700}}
            />
            {
                info.stations.map((station,index) =>(
                    <TextField
                        key={index}
                        label={`Station #${index+1}`}
                        multiline
                        rows="3"
                        margin="normal"
                        variant="outlined"
                        style={{width : 650, marginLeft:50}}
                    />
                ))
            }
            <AddRemoveButtonBar 
                addFunction={addStation}
                removeFunction={removeStation}
                marginLeft={500} 
                marginTop={10}
            />
            <Button type='submit' variant="contained" color="primary">
                    Next  <i className="material-icons">navigate_next</i>
            </Button>
        </FormWraper>
    )
}
