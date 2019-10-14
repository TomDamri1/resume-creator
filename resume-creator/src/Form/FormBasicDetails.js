import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './form.css';
import { createBrowserHistory } from 'history'
import BasicDetails from '../hooks/BasicDetails';
import FormWraper from './FormWraper'

function FormBasicDetails (){
    const [info , setInfo] = BasicDetails();
    const next = () =>{
        let _history = createBrowserHistory();
        _history.push('/form/profile')
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(info)

        
    }
    const handleChange= (e) => {
        setInfo({...info , 
            [e.target.name] : e.target.value});
    }
    return (
        <FormWraper>
        <form onSubmit={handleSubmit}>
            <li>
            <TextField
                name='firstName'
                id="outlined-name"
                label="First Name"
                margin="normal"
                variant="outlined"
                value={info.firstName}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='lastName'
                id="outlined-name"
                label="Last Name"
                margin="normal"
                variant="outlined"
                value={info.lastName}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='email'
                id="outlined-name"
                label="Email"
                margin="normal"
                variant="outlined"
                value={info.email}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='jobTitle'
                id="outlined-name"
                label="Job Title"
                margin="normal"
                variant="outlined"
                value={info.jobTitle}
                onChange={handleChange}
            />
            </li>
            <li>
                <Button type='submit' variant="contained" color="primary">
                Submit
            </Button>
            </li>
        </form>
        </FormWraper>
    )
}


export default FormBasicDetails
