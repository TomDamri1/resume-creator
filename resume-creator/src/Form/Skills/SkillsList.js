import React from 'react'
import useSkillList from '../../hooks/useSkillList'
import AddIcon from '@material-ui/icons/Add';
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
            skills:[skills , <Skill key={uuidv4()}/>],
            indexOfLastSkill : indexOfLastSkill+1
        })
    }
    return (
        <div>
            <Typography color="textSecondary" gutterBottom>
                {props.title}
            </Typography>
            {skills}
            <Fab color="primary" aria-label="add"
                style={{marginTop:'1em' , marginLeft:'25em'}}
                onClick={addSkill}
            >
                <AddIcon />
            </Fab>
        </div>
    )
}

export default SkillsList
