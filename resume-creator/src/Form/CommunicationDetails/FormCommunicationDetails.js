import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormWraper from '../FormWraper'
import CommunicationDetails from './hooks/CommunicationDetails';

function FormCommunicationDetails(props) {
    const [info , setInfo] = CommunicationDetails();
    const next = () =>{
        
        props.history.push('/form/BirthAndNationalityDetails')
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
    const title='Location&Communication Details';
    const header='Enter your Communication Details'
    return (
        <FormWraper title={title} header={header}>
        <form onSubmit={handleSubmit}>
            <li>
            <TextField
                name='phoneNumber'
                id="outlined-phoneNumber"
                label="Phone Number"
                margin="normal"
                variant="outlined"
                value={info.phoneNumber}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='country'
                id="outlined-country"
                label="Country"
                margin="normal"
                variant="outlined"
                value={info.country}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='city'
                id="outlined-city"
                label="City"
                margin="normal"
                variant="outlined"
                value={info.city}
                onChange={handleChange}
            />
            </li>
            <li>
            <TextField
                name='streetAddress'
                id="outlined-streetAddress"
                label="Street Address"
                margin="normal"
                variant="outlined"
                value={info.street}
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

export default FormCommunicationDetails
