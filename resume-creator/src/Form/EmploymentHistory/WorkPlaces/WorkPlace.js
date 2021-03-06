import React, { useEffect } from 'react';
import { TextField, Typography } from '@material-ui/core';
import useWorkPlace from '../hooks/useWorkPlace';

function WorkPlace(props) {
    const [workPlace , setWorkPlace] = useWorkPlace();

    useEffect(() => {
        console.log("effected")
        console.log(workPlace)
        props.handleTypeChange(props.id , workPlace);
    }, [workPlace])
    
    const handleChange= (e) => {
        setWorkPlace({...workPlace , 
            [e.target.name] : e.target.value,});
    }
    return (
        <>
        <div>
            <TextField
                name='title'
                id="outlined-title"
                label="Job Title"
                margin="normal"
                variant="outlined"
                value={workPlace.title}
                onChange={handleChange}
            />
            <TextField
                name='place'
                id="outlined-place"
                label="Job Place"
                margin="normal"
                variant="outlined"
                value={workPlace.place}
                onChange={handleChange}
            />
            <TextField
                name='start'
                id="outlined-start"
                label="Job Start"
                margin="normal"
                variant="outlined"
                value={workPlace.start}
                onChange={handleChange}
                style={{width:100}}
            />
            <TextField
                name='end'
                id="outlined-end"
                label="Job End"
                margin="normal"
                variant="outlined"
                value={workPlace.end}
                onChange={handleChange}
                style={{width:100}}
            />
        </div>
        <div style={{margin:'auto',textAlign:'left' ,maxWidth:650}}>
            <Typography variant='h6' >
                {workPlace.title? `${workPlace.title} at ${workPlace.place}` :'' }
            </Typography>
            <Typography variant='caption'>
                {workPlace.title? `${workPlace.start} - ${workPlace.end}` :'' }
            </Typography>
            
        </div>
        </>
        
    )
}

export default WorkPlace
