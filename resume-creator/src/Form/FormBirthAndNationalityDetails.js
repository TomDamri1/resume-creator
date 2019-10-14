import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './form.css';
import { createBrowserHistory } from 'history'
import FormWraper from './FormWraper'
import BirthAndNationalityDetails from '../hooks/BirthAndNationalityDetails';

function FormBirthAndNationalityDetails() {
    const [info , setInfo] = BirthAndNationalityDetails();
    const next = () =>{
        let _history = createBrowserHistory();
        _history.push('/form/BirthAndNationalityDetails')
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(info);
        next();
    }
    const handleChange= (e) => {
        setInfo({...info , 
            [e.target.name] : e.target.value});
    }
    const changeBirthdate = (e) =>{
        setInfo({...info , 
            [e.target.name] : e.target.value});
        console.log(e.target.value)
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
                onChange={changeBirthdate}
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
                <Button type='submit' variant="contained" color="primary">
                    Next  <i className="material-icons">navigate_next</i>
                </Button>
            </li>
        </form>
        </FormWraper>
    )
}

export default FormBirthAndNationalityDetails
