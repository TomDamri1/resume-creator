import React ,{useState} from 'react'

function EmploymentHistory() {
    const [employmentHistory , setEmploymentHistory] = useState(
        null
    );
    return [employmentHistory , setEmploymentHistory]
}

export default EmploymentHistory


