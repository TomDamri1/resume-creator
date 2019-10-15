import React from 'react'
import useWorkPlacesList from '../../hooks/useWorkPlacesList'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import uuidv4 from  'uuid/v4';
import Typography from '@material-ui/core/Typography';
import WorkPlace from './WorkPlace';


function WorkPlacesList(props) {
    const [ workPlacesList , setWorkPlacesList] = useWorkPlacesList();
    const {workPlaces , indexOfLastPlace} =  workPlacesList
    const addSkill = ()=>{
        //check here if the last skill is used!
        setWorkPlacesList({
            workPlaces:[...workPlaces , <WorkPlace key={uuidv4()}/>],
            indexOfLastPlace : indexOfLastPlace+1
        })
    }
    const removeSkill = ()=>{
        setWorkPlacesList({
            workPlaces:[...workPlaces.slice(0,indexOfLastPlace)],
            indexOfLastPlace : indexOfLastPlace-1
        })
    }
    return (
        <div>
            <Typography color="textSecondary" gutterBottom>
                {props.title}
            </Typography>
            {workPlaces}
            <div style={{marginTop:'1em' , marginLeft:'30em',}}>
            <Fab color="primary" aria-label="add" onClick={addSkill}
            >
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="delete" onClick={removeSkill}
                style={{marginLeft:'1em'}}
            >
                <DeleteIcon />
            </Fab>
            </div>
        </div>
    )
}

export default WorkPlacesList
