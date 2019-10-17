import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormWraper from '../FormWraper'
import BirthAndNationalityDetails from './hooks/BirthAndNationalityDetails';
import Skill from '../Skills/Skill';
import uuidv4 from  'uuid/v4';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
        console.log(id);
    }
    const onTypeChange =(id,type) =>{
        setLanguages({...Languages, [id] : {
            ...Languages[id],
            type:type,
        }})
        setInfo({...info , languages:{...Languages}})
        console.log(type)
        console.log(info.languages)
    }
    const onLevelChange =(id,level) =>{
        setLanguages({...Languages, [id] : {
            ...Languages[id],
            level:level,
        }})
        setInfo({...info , languages:{...Languages}})
    }
    const removeLanguage = () =>{
        let id = lanCounter[lanCounter.length-1]
        let tempLanCounter =lanCounter;
        tempLanCounter.pop();
        let tempLanguages = Languages;
        delete tempLanguages[id];
        setLanguages({...tempLanguages});
        setlanCounter([...tempLanCounter]);
    }
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
                <Typography variant='caption'>
                    Name your languages and choose the level of control.
                </Typography>
                {
                    lanCounter.map(id=>(
                        <Skill id={id} 
                            key={id}
                            onTypeChange={onTypeChange} 
                            onLevelChange={onLevelChange}
                            removeLanguage={removeLanguage}
                        />
                    ))
                }
                
            </li>
            <li>
                <div className='buttons-div' style={{marginLeft:200 , marginTop:10}}>
                    <IconButton onClick={()=>addLanguage(uuidv4())}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton onClick={removeLanguage}>
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
