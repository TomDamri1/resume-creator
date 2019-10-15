import React,{useState} from 'react'
import uuidv4 from  'uuid/v4';
import WorkPlace from '../Form/WorkPlaces/WorkPlace';

//need to update FormEmploymentHistory
function useWorkPlacesList() {
    const [workPlacesList , setWorkPlacesList] = useState({
        workPlaces : [<WorkPlace key={uuidv4()}/>],
        indexOfLastPlace : 0,  
    });
    return [workPlacesList , setWorkPlacesList]
}

export default useWorkPlacesList