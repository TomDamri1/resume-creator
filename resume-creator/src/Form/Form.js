import React, { Component } from 'react'
import {Route , Switch} from 'react-router-dom';
import UserDetails from './UserDetails';
import FormContext from './FormContext';
import GetStarted from './GetStarted'


export class Form extends Component {
    static contextType = FormContext;
    render() {
        return(
                <h1>.</h1>
        )
    }
}

export default Form;

/**
 * <Switch>
                
            </Switch>
 */