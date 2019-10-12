import React, { Component,createContext } from 'react'

const FormContext = createContext();

export class FormProvider extends Component {
    state={
        step : 1,
        firstName:'',
        lastName:'',
        email:'',
        title:'',
        location:'',
        phoneNumber:'',
        address:'',
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
        education:[],
        functions: {
            //go to next step
            nextStep: ()=> {
                const {step} = this.state;
                this.setState({step : step+1});
            },
            //go to prev step
            prevStep: ()=> {
                const {step} = this.state;
                this.setState({step : step+1});
            },

            handleChange: e => {
                this.setState({[e.target.name] : e.target.value})
            },
            setContextState: (_state) => {
                this.setState(_state,console.log(this.state));
            }

        }
    }
    
    
    render() {
        return (
            <FormContext.Provider value={{...this.state,
                                        handleChange : this.handleChange ,
                                        nextStep:this.nextStep , 
                                        prevStep:this.prevStep , 
                                        submitChanges:this.submitChanges,
                                        }}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}

export default FormContext
