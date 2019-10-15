import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Skill from './Skill';
import uuidv4 from  'uuid/v4';
import Typography from '@material-ui/core/Typography';
import useSkill from '../../hooks/useSkill';


function SkillsList(props) {
    const [skillList , setSkillList] = props.useSkillList;
    const addSkill= (skill)=>{
        props.addSkill(skill);
    }
    const addNewSkill= (skill)=>{
        props.addSkill(skill);
    }
    const handleSkillChange = (name , skill) => {
        props.handleSkillChange(name , skill);
    }
    const removeSkill = props.removeSkill
    return (
        <div>
            
        </div>
    )
}

export default SkillsList
