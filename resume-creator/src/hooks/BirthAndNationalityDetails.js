import React ,{useState , useEffect} from 'react'

function BirthAndNationalityDetails() {
    const [birthAndNationalityDetails , setBirthAndNationalityDetails] = useState({
        birthDate:'',
        birthPlace:'',
        nationality:'',
        languages:[],
    });
    return (
        <div>
            
        </div>
    )
}

export default BirthAndNationalityDetails


let handleChange= (e) => {
    this.setState({[e.target.name] : e.target.value})
}