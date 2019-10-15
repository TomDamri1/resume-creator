import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './form.css';
import { createBrowserHistory } from 'history'
import useSkillList from '../hooks/useSkillList';
import FormWraper from './FormWraper'
import BirthAndNationalityDetails from '../hooks/BirthAndNationalityDetails';
import SkillsList from './Skills/SkillsList';
import useSkill from '../hooks/useSkill';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Skill from './Skills/Skill';
import uuidv4 from  'uuid/v4';
import Typography from '@material-ui/core/Typography';
import { timeout } from 'q';

function FormBirthAndNationalityDetails(props) {
    const [lanCounter , setlanCounter] = useState([])
    const [info , setInfo] = BirthAndNationalityDetails();
    const [Languages , setLanguages] = useState({})
    const next = () =>{
        props.history.push('/form/EmploymentHistory');
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let tempLangs = [];
        // for(var key in Languages){
        //     tempLangs.push(Languages[key]);
        // }
        // tempLangs=[...tempLangs]
        console.log(tempLangs)
        next();
        console.log(info)
    }
    const handleChange= (e) => {
        setInfo({...info , 
            [e.target.name] : e.target.value});
    }
    const addLanguage = (id) =>{
        setLanguages({...Languages, [id] : {
            type:'',
            level:0,
        }})
        setlanCounter([...lanCounter,id])
    }
    const onTypeChange =(id,type) =>{
        setLanguages({...Languages, [id] : {
            ...Languages[id],
            type:type,
            
        }})
        setInfo({...info , languages:{...Languages}})
    }
    const onLevelChange =(id,level) =>{
        setLanguages({...Languages, [id] : {
            ...Languages[id],
            level:level,
        }})
        setInfo({...info , languages:{...Languages}})
    }
    console.log(info)
    const title='Birth&Nationality Details';
    const header='Enter your Birth & Nationality Details'
    return (
        <FormWraper title={title} header={header}>
        <form onSubmit={handleSubmit}>
            <li>
            <TextField
                name='birthdate'
                id="birthdate"
                label="Birthday"
                type="date"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,}}
                value={info.birthdate}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='birthPlace'
                id="outlined-birthPlace"
                label="Birthplace"
                margin="normal"
                variant="outlined"
                value={info.birthPlace}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='nationality'
                id="outlined-nationality"
                label="Nationality"
                margin="normal"
                variant="outlined"
                value={info.nationality}
                onChange={handleChange}
                style={{paddingBottom:'1.85em',}}
            />
            </li>
            <li>
                <Typography variant='h6'>
                    Languages
                </Typography>
                {
                    lanCounter.map(id=>(
                        <Skill id={id} onTypeChange={onTypeChange} onLevelChange={onLevelChange}/>
                    ))
                }
                
            </li>
            <li>
                <Button onClick={()=>addLanguage(uuidv4())}>
                    +
                </Button>
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
