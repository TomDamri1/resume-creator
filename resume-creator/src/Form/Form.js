import React, { Component } from 'react'
import {Route , Switch} from 'react-router-dom';
import UserDetails from './UserDetails';
import FormContext from './FormContext';
export class Form extends Component {
    static contextType = FormContext;
    render() {
        return(
            <Switch>
                <Route 
                        exact path='/form/userdetails' 
                        render={()=> 
                            <UserDetails/>
                        }
                />
            </Switch>
        )
    }
}

export default Form

/**
 * <Switch>
                
            </Switch>
 */