import React, { Component } from 'react'
import {Route , Switch} from 'react-router-dom';
import UserDetails from './UserDetails';
export class Form extends Component {
    state={
        step : 1,
        firstName:'',
        lastName:'',
        title:'',
        location:'',
        phoneNumber:'',
        address:'',
        email:'',
        birthDate:'',
        birthPlace:'',
        nationality:'',
        skills:[],
        languages:[],
        profile:{
            bio:'',
            stations:[],
        },
        employmentHistory:[],
        education:[]
    }

    //go to next step
    nextStep= ()=> {
        const {step} = this.state;
        this.setState({step : step+1});
    }
    //go to prev step
    prevStep= ()=> {
        const {step} = this.state;
        this.setState({step : step+1});
    }

    handleChange = input => e => {
        this.setState({[input] : e.target.value})
    }

    render() {
        const {step} = this.state;
        const {
            firstName,lastName,title,location,phoneNumber,address,email,birthDate,
            birthPlace,nationality,skills,languages,employmentHistory,education,
        } = this.state;
        const values= {
            firstName,lastName,title,location,phoneNumber,address,email,birthDate,
            birthPlace,nationality,skills,languages,employmentHistory,education,
        }
        return(
            <Switch>
                <Route 
                        exact path='/form/userdetails' 
                        render={()=> <UserDetails/>}
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