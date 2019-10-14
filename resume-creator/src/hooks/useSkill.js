import {useState} from 'react'

function useSkill() {
    const [skill , setSkill] = useState({
        type:'',
        level:0,
    });
    return [skill , setSkill]
}

export default useSkill