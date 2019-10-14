import React ,{useState , useEffect} from 'react'

function useInfo() {
    const [info , setInfo] = useState({
        basicDetails:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
        },
        communicationDetails:{
            location:'',
            phoneNumber:'',
            address:'',
        },
        birthAndNationalityDetails:{
            birthDate:'',
            birthPlace:'',
            nationality:'',
            languages:[],
        },
        experienceDetails:{
            skills:[],
            profile:{
                bio:'',
                stations:[],
            },
            employmentHistory:[],
            education:[],
        }
    });
    return (
        <div>
            
        </div>
    )
}

export default useInfo


let handleChange= (e) => {
    this.setState({[e.target.name] : e.target.value})
}