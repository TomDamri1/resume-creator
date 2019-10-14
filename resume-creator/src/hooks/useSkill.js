import {useState , useEffect} from 'react'

function useSkill() {
    const [skill , setSkill] = useState({
        type:'',
        level:0,
        used: false,
    });
    
    useEffect(()=>{
        if(skill.type!== ''){
            setSkill({
                ...skill, used : true
            })
        }
        else{
            setSkill({
                ...skill, used : false
            })
        }
    },[skill.type]);
    return [skill , setSkill]
}

export default useSkill