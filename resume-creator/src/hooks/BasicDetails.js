import React ,{useState , useEffect} from 'react'

function BasicDetails() {
    const [basicDetails , setBasicDetails] = useState({
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
        });
    return (
        <div>
            
        </div>
    )
}

export default BasicDetails


let handleChange= (e) => {
    this.setState({[e.target.name] : e.target.value})
}