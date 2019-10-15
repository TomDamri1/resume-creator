import React,{useState} from 'react'
import Skill from '../Form/Skills/Skill';
import uuidv4 from  'uuid/v4';
import useSkill from './useSkill';

//need to update FormBirthAndNationalityDetails
function useSkillList() {
    const [skillList , setSkillList] = useState([]);
    return [skillList , setSkillList]
}

export default useSkillList