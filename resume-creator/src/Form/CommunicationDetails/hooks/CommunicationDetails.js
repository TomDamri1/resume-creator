import {useState} from 'react'

function CommunicationDetails() {
    const [communicationDetails , setCommunicationDetails] = useState({
            phoneNumber:'',
            country:'',
            city:'',
            streetAddress:'',
            
        });
    return [communicationDetails , setCommunicationDetails]
}

export default CommunicationDetails