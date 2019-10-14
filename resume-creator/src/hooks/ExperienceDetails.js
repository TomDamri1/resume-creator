import React ,{useState , useEffect} from 'react'

function ExperienceDetails() {
    const [experienceDetails , setExperienceDetails] = useState({
        skills:[],
        profile:{
            bio:'',
            stations:[],
        },
        employmentHistory:[],
        education:[],
    });
    return (
        <div>
            
        </div>
    )
}

export default ExperienceDetails


let handleChange= (e) => {
    this.setState({[e.target.name] : e.target.value})
}