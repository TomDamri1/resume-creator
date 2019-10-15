import React ,{useState} from 'react'

function Profile() {
    const [profile , setProfile] = useState({
            bio:'',
            stations:[],
    });
    return [profile , setProfile]
}

export default Profile