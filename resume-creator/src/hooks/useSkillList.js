import React,{useState} from 'react'
import Skill from '../Form/Skills/Skill';
import uuidv4 from  'uuid/v4';

//need to update FormBirthAndNationalityDetails
function useSkillList() {
    const [skillList , setSkillList] = useState({
        skills : [<Skill key={uuidv4()}/>],
        indexOfLastSkill : 0,
        
    });
    return [skillList , setSkillList]
}

export default useSkillList