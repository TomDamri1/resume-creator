import React ,{useState} from 'react'
import FormWraper from '../FormWraper'
import { TextField } from '@material-ui/core';
import {card_lg} from '../../consts';
import AddRemoveButtonBar from '../AddRemoveButtonBar';
import Button from '@material-ui/core/Button';
import uuidv4 from 'uuid/v4'
import Station from './Station';


/**
 * gets from the user:
 * 
 *  - bio
 *  - stations
 */
export default function FormProfile(props) {
    const {context} = props;
    const firstId = 'firstId';
    const secondId = 'secondId';
    const [info, setInfo] = useState({
        bio:'',
        stations:{
            firstId :'',
            secondId:'',
        },
    })
    const next = () =>{
        props.history.push('/Resume');
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        context.setProfile(info)
        next();
        console.log(info)
    }
    const [stationCounter, setStationCounter] = useState([firstId,secondId])
    const addStation = (id) =>{
        let tempStationCounter = stationCounter;
        setInfo({
            ...info,
            stations : {...info.stations, [id] : '' },
        })
        setStationCounter([
            ...tempStationCounter , id
        ])
    }
    const removeStation = () =>{
        let id = stationCounter[stationCounter.length-1]
        let tempstationCounter =stationCounter;
        tempstationCounter.pop();
        let tempInfo = info;
        delete tempInfo.stations[id];
        setStationCounter([...tempstationCounter]);
        setInfo({...tempInfo});
    }
    const handleMainProfileChange = (e) => {
        setInfo({...info , 
            bio : e.target.value});
    }
    const handleStationChange = (id,value) =>{
        setInfo({
            ...info , 
            stations : {...info.stations,
                [id] : value
            }
        })
    }
    const title = 'Profile';
    const header = 'Enter your Work Profile and relevant job stations'
    return (
        <FormWraper title={title} header={header} width={card_lg}>
            <form onSubmit={handleSubmit}>
            <TextField
                id="outlined-multiline-static"
                label="Work Profile"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                style={{width : 700}}
                onChange={handleMainProfileChange}
            />
            {
                stationCounter.map((station,index) =>(
                    <Station id={station} index={index} key={index} handleStationChange={handleStationChange}/>
                ))
            }
            <AddRemoveButtonBar 
                addFunction={()=>addStation(uuidv4())}
                removeFunction={removeStation}
                marginLeft={500} 
                marginTop={10}
            />
            <Button type='submit' variant="contained" color="primary">
                    Next  <i className="material-icons">navigate_next</i>
            </Button>
            </form>
        </FormWraper>
    )
}
