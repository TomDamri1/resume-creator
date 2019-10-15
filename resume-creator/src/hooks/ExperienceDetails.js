import React ,{useState} from 'react'

function ExperienceDetails() {
    const [experienceDetails , setExperienceDetails] = useState({
        skills:[],
        employmentHistory:[],
        education:[],
    });
    return [experienceDetails , setExperienceDetails]
}

export default ExperienceDetails


