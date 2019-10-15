import {useState , useEffect} from 'react'

function useWorkPlace() {
    const [workPlace , setWorkPlace] = useState({
        title:null,
        place:'',
        start:2000,
        end: 2019,
    });
    return [workPlace , setWorkPlace]
}

export default useWorkPlace