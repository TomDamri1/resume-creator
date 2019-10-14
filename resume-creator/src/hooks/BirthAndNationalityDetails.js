import React ,{useState , useEffect} from 'react'

function BirthAndNationalityDetails() {
    const [birthAndNationalityDetails , setBirthAndNationalityDetails] = useState({
        birthdate:"1994-10-13", //default value
        birthPlace:'',
        nationality:'',
        languages:[],
    });
    return [birthAndNationalityDetails , setBirthAndNationalityDetails]
}

export default BirthAndNationalityDetails