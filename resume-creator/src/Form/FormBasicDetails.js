import React from 'react'
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
        _history.push('/form/CommunicationDetails')
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
    const title='Basic Details';
    const header='Enter your Basic Details'
    return (
        <FormWraper title={title} header={header}>
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
                style={{paddingBottom:'1.85em'}}
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


export default FormBasicDetails
