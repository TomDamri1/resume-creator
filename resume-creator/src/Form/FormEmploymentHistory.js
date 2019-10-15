import React from 'react'
import Button from '@material-ui/core/Button';
import './form.css';
import { createBrowserHistory } from 'history'
import FormWraper from './FormWraper'
import EmploymentHistory from '../hooks/EmploymentHistory';

function FormEmploymentHistory(props) {
    const [info , setInfo] = EmploymentHistory();
    const next = () =>{
        let _history = createBrowserHistory();
        props.history.push('/form/ExperienceDetails')
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
    const title='Employment History Details';
    const header='Enter your Employment History Details'
    return (
        <FormWraper title={title} header={header}>
        <form onSubmit={handleSubmit}>
            
            <li>
                <Button type='submit' variant="contained" color="primary">
                    Next  <i className="material-icons">navigate_next</i>
                </Button>
            </li>
        </form>
        </FormWraper>
    )
}

export default FormEmploymentHistory