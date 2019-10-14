import React ,{useState , useEffect} from 'react'

function BasicDetails() {
    const [basicDetails , setBasicDetails] = useState({
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
        });
    return [basicDetails , setBasicDetails]
}

export default BasicDetails

