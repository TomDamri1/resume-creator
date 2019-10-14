import React from 'react'
import useSkillList from '../../hooks/useSkillList'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Skill from './Skill';
import uuidv4 from  'uuid/v4';
import Typography from '@material-ui/core/Typography';


function SkillsList(props) {
    const [skillList , setSkillList] = useSkillList();
    const {skills , indexOfLastSkill} =  skillList
    const addSkill = ()=>{
        //check here if the last skill is used!
        setSkillList({
            skills:[...skills , <Skill key={uuidv4()}/>],
            indexOfLastSkill : indexOfLastSkill+1
        })
    }
    const removeSkill = ()=>{
        setSkillList({
            skills:[...skills.slice(0,indexOfLastSkill)],
            indexOfLastSkill : indexOfLastSkill-1
        })
    }
    return (
        <div>
            <Typography color="textSecondary" gutterBottom>
                {props.title}
            </Typography>
            {skills}
            <div style={{marginTop:'1em' , marginLeft:'18em',}}>
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

export default SkillsList
