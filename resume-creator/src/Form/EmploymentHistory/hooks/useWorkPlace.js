import {useState } from 'react'

function useWorkPlace() {
    const [workPlace , setWorkPlace] = useState({
        title:undefined,
        place:'',
        start:2000,
        end: 2019,
    });
    return [workPlace , setWorkPlace]
}

export default useWorkPlace