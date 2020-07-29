import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import FormWraper from '../FormWraper'
import Skill from '../Skills/Skill';
import uuidv4 from 'uuid/v4';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

/**
 * gets from the user:
 * 
 *  - skills
 */
function FormBirthAndNationalityDetails(props) {
    /*
    const {context} = props;
    const firstId='firstId'
    const [skillCounter , setSkillCounter] = useState([firstId])
    const [info , setInfo] = useState({
        firstId:{
            type:'',
            level:'',
        }
    });
    const next = () =>{
        //props.history.push('/Resume')
        props.history.push('/form/Profile');
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        context.setSkills(info)
        next();
        console.log(info)
    }
    const addSkill = (id) =>{
        setInfo({...info, [id] : {
            type:'',
            level:0,
        }})
        setSkillCounter([...skillCounter,id])
        console.log(id);
    }
    const onTypeChange =(id,type) =>{
        setInfo({...info, [id] : {
            ...info[id],
            type:type,
        }})
    }
    const onLevelChange =(id,level) =>{
        setInfo({...info, [id] : {
            ...info[id],
            level:level,
        }})
    }
    const removeSkill = () =>{
        let id = skillCounter[skillCounter.length-1]
        let tempskillCounter =skillCounter;
        tempskillCounter.pop();
        let tempInfo = info;
        delete tempInfo[id];
        setInfo({...tempInfo});
        setSkillCounter([...skillCounter]);
    }
    */
    const { context } = props;
    const [info, setInfo] = useState([{ id: uuidv4(), skillName: '', skillLevel: 0 }]);
    const next = () => {
        //props.history.push('/Resume')
        props.history.push('/form/Profile');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        context.setSkills(info)
        next();
        console.log(info)
    }
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }
    const addSkill = () => {
        setInfo([...info, { id: uuidv4(), skillName: '', skillLevel: 0 }])
    }
    const handleSkillChange = (id, skill) => {
        let newSkills = info;
        for (let index = 0; index < info.length; index++) {
            if (info[index].id === id) {
                newSkills[index].skillName = skill.type;
                newSkills[index].skillLevel = skill.level;
            }
        }
        setInfo([...newSkills])
    }

    const removeSkill = () => {
        const lastItemInTheArray = info.length - 1;
        setInfo([...info.slice(0, lastItemInTheArray)])
    }
    const title = 'Skills';
    const header = 'Enter your Skills and your Skill level'
    return (
        <FormWraper title={title} header={header}>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <Typography variant='h6' style={{ marginBottom: '2em' }}>
                            Name your skill and choose its level
                        </Typography>
                        {
                            info.map(obj => (
                                <Skill
                                    id={obj.id}
                                    key={obj.id}
                                    handleChange={handleSkillChange}
                                />)
                            )
                        }

                    </li>
                    <li>
                        <div className='buttons-div' style={{ marginLeft: 200, marginTop: 10 }}>
                            <IconButton onClick={() => addSkill()}>
                                <AddIcon />
                            </IconButton>
                            <IconButton onClick={removeSkill}>
                                <RemoveIcon />
                            </IconButton>
                        </div>
                    </li>
                    <li>
                        <Button type='submit' variant="contained" color="primary">
                            Next  <i className="material-icons">navigate_next</i>
                        </Button>
                    </li>
                </ul>
            </form>
            <Button onClick={() => { alert(JSON.stringify(info)) }}>show state</Button>
        </FormWraper>
    )
}

export default FormBirthAndNationalityDetails
