import React ,{useState , useEffect} from 'react'

function CommunicationDetails() {
    const [communicationDetails , setCommunicationDetails] = useState({
            location:'',
            phoneNumber:'',
            address:'',
        });
    return (
        <div>
            
        </div>
    )
}

export default CommunicationDetails


let handleChange= (e) => {
    this.setState({[e.target.name] : e.target.value})
}