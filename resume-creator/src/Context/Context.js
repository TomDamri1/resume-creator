import React, { Component } from 'react'

export const MyContext = React.createContext();

export class MyProvider extends Component{
    state ={};

    setBasicDetails = (basicDetails)=>{
        this.setState({
            ...this.state,
            basicDetails : basicDetails
        })
    }
    setCommunicationDetails = (communicationDetails)=>{
        this.setState({
            ...this.state,
            communicationDetails : communicationDetails
        })
    }
    setBirthAndNationalityDetails = (birthAndNationalityDetails)=>{
        this.setState({
            ...this.state,
            birthAndNationalityDetails : birthAndNationalityDetails
        })
    }
    setEmploymentHistory = (employmentHistory)=>{
        this.setState({
            ...this.state,
            employmentHistory : employmentHistory
        })
    }
    setEducationDetails = (educationDetails) =>{
        this.setState({
            ...this.state,
            educationDetails : educationDetails
        })
    }
    setSkills = (skills) =>{
        this.setState({
            ...this.state,
            skills : skills
        })
    }
    setProfile = (profile) =>{
        this.setState({
            ...this.state,
            profile : profile
        })
    }
    render(){
        return (
            <MyContext.Provider value={{
                state : this.state , 
                setBasicDetails : this.setBasicDetails,
                setCommunicationDetails : this.setCommunicationDetails,
                setBirthAndNationalityDetails : this.setBirthAndNationalityDetails,
                setEmploymentHistory : this.setEmploymentHistory,
                setEducationDetails : this.setEducationDetails,
                setSkills : this.setSkills,
                setProfile : this.setProfile,
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
