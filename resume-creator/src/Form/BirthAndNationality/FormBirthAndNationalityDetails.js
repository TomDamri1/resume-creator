import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormWraper from '../FormWraper'
import BirthAndNationalityDetails from './hooks/BirthAndNationalityDetails';
import Skill from '../Skills/Skill';
import uuidv4 from 'uuid/v4';
import Typography from '@material-ui/core/Typography';
import AddRemoveButtonBar from '../AddRemoveButtonBar';

/**
 * gets from the user:
 * 
 *  - birthdate
 *  - birthPlace
 *  - nationality
 *  - languages
 */
function FormBirthAndNationalityDetails(props) {
    const { context } = props;
    const [info, setInfo] = BirthAndNationalityDetails();
    const next = () => {
        //props.history.push('/Resume')
        props.history.push('/form/EmploymentHistory');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        context.setBirthAndNationalityDetails(info);
        next();
        console.log(info)
    }
    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }
    const addLanguage = () => {
        setInfo({
            ...info, languages: [...info.languages, { id: uuidv4(), languageName: '', languageLevel: 0 }]
        })
    }
    const handleLanguageChange = (id, skill) => {
        let newLanguages = info.languages;
        for (let index = 0; index < info.languages.length; index++) {
            if (info.languages[index].id === id) {
                newLanguages[index].languageName = skill.type;
                newLanguages[index].languageLevel = skill.level;
            }
        }
        setInfo({ ...info, languages: newLanguages })
    }

    const removeLanguage = () => {
        const lastItemInTheArray = info.languages.length - 1
        setInfo({ ...info, languages: [...info.languages.slice(0, lastItemInTheArray)] })
    }

    const title = 'Birth&Nationality Details';
    const header = 'Enter your Birth & Nationality Details'
    return (
        <FormWraper title={title} header={header}>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <TextField
                            name='birthdate'
                            id="birthdate"
                            label="Birthday"
                            type="date"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                            style={{ paddingBottom: '1.85em', }}
                        />
                    </li>
                    <li>
                        <Typography variant='h6'>
                            Languages
                </Typography>
                        <Typography variant='caption' >
                            Name your languages and choose the level of control.
                </Typography>
                        {info.languages.map(obj => (
                            <Skill
                                id={obj.id}
                                key={obj.id}
                                handleChange={handleLanguageChange}
                            /*
                            onTypeChange={onTypeChange}
                            onLevelChange={onLevelChange}
                            removeLanguage={removeLanguage}
                            */
                            />))
                        }

                    </li>
                    <li>
                        <AddRemoveButtonBar
                            addFunction={() => addLanguage()}
                            removeFunction={removeLanguage}
                            marginLeft={500}
                            marginTop={10}
                        />
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

/*
<div className='buttons-div' style={{marginLeft:200 , marginTop:10}}>
                    <IconButton onClick={()=>addLanguage(uuidv4())}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton onClick={removeLanguage}>
                        <RemoveIcon/>
                    </IconButton>
                </div>

                */