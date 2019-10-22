import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import FormWraper from '../FormWraper'
import Skill from '../Skills/Skill';
import uuidv4 from  'uuid/v4';
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
    const title='Skills';
    const header='Enter your Skills and your Skill level'
    return (
        <FormWraper title={title} header={header}>
        <form onSubmit={handleSubmit}>
            <li>
                <Typography variant='h6' style={{marginBottom : '2em'}}>
                    Name your skill and choose it level
                </Typography>
                {
                    skillCounter.map(id=>(
                        <Skill id={id} 
                            key={id}
                            onTypeChange={onTypeChange} 
                            onLevelChange={onLevelChange}
                            removeSkill={removeSkill}
                        />
                    ))
                }
                
            </li>
            <li>
                <div className='buttons-div' style={{marginLeft:200 , marginTop:10}}>
                    <IconButton onClick={()=>addSkill(uuidv4())}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton onClick={removeSkill}>
                        <RemoveIcon/>
                    </IconButton>
                </div>
            </li>
            <li>
                <Button type='submit' variant="contained" color="primary">
                    Next  <i className="material-icons">navigate_next</i>
                </Button>
            </li>
        </form>
        </FormWraper>
    )
}

export default FormBirthAndNationalityDetails
