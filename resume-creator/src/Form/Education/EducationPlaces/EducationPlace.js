import React ,{useState} from 'react';
import { TextField, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

function EducationPlace(props) {
    const [educationPlace , setEducationPlace] = useState({
        title:'',
        place: '',
        start:'',
        end:'',
        degree:'',
    });
    const handleChange= (e) => {
        setEducationPlace({...educationPlace , 
            [e.target.name] : e.target.value,});

        props.handleTypeChange(props.id , educationPlace);
    }
    return (
        <>
        <div>
            <li>
            <TextField
                name='title'
                id="outlined-title"
                label="Title"
                margin="normal"
                variant="outlined"
                value={educationPlace.title}
                onChange={handleChange}
                style={{width:275}}
            />
            <TextField
                name='place'
                id="outlined-place"
                label="Place"
                margin="normal"
                variant="outlined"
                value={educationPlace.place}
                onChange={handleChange}
                style={{width:275}}
            />
            </li>
            <li>
            <TextField
                name='start'
                id="outlined-start"
                label="Start"
                margin="normal"
                variant="outlined"
                value={educationPlace.start}
                onChange={handleChange}
                style={{width:100}}
            />
            <TextField
                name='end'
                id="outlined-end"
                label="End"
                margin="normal"
                variant="outlined"
                value={educationPlace.end}
                onChange={handleChange}
                style={{width:100}}
            />
            <TextField
                name='degree'
                id="outlined-place"
                label="Degree"
                margin="normal"
                variant="outlined"
                value={educationPlace.degree}
                onChange={handleChange}
                style={{width:350}}
            />
            </li>
        </div>
        <div style={{margin:'auto',textAlign:'left' ,maxWidth:650}}>
            <Typography variant='h6' >
                {educationPlace.title? `${educationPlace.title} at ${educationPlace.place}` :'' }
            </Typography>
            <Typography variant='caption'>
                {educationPlace.title? `${educationPlace.start} - ${educationPlace.end}` :'' }
            </Typography>
            <li>
            <Typography variant='caption' style={{fontWeight : 'bold'}}>
                {educationPlace.title? `Degree : ${educationPlace.degree}` :'' }
            </Typography>
            </li>
        </div>
        <Divider style={{marginBottom:'2em'}}/>
        </>
        
    )
}

export default EducationPlace
