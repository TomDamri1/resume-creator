import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormContext from './FormContext';
import Button from '@material-ui/core/Button';
import './form.css';
export class UserDetails extends Component {
    static contextType = FormContext;
    handleSubmit = (e) =>{
        e.stopPropagation();
        this.context.functions.setContextState({
            firstName : this.context.firstName,
            lastName : this.context.lastName
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <li>
                <TextField
                    name='firstName'
                    id="outlined-name"
                    label="First Name"
                    margin="normal"
                    variant="outlined"
                    value={this.context.firstName}
                    onChange={this.context.functions.handleChange}
                />
                </li>
                <li>
                <TextField
                    name='lastName'
                    id="outlined-name"
                    label="Last Name"
                    margin="normal"
                    variant="outlined"
                    value={this.context.lastName}
                    onChange={this.context.functions.handleChange}
                />
                </li>
                <li>
                <TextField
                    name='email'
                    id="outlined-name"
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    value={this.context.email}
                    onChange={this.context.functions.handleChange}
                />
                </li>
                <li>
                 <Button type='submit' variant="contained" color="primary">
                    Submit
                </Button>
                </li>
            </form>
        )
    }
}

export default UserDetails
