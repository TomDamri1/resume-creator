import React ,{useState} from 'react'
import FormWraper from '../FormWraper'
import EducationPlace from './EducationPlaces/EducationPlace';
import Button from '@material-ui/core/Button';
import uuidv4 from 'uuid/v4';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function FormEducationDetails(props) {
    const firstId='firstId';
    const [educationCounter, setEducationCounter] = useState([firstId])
    const [info, setInfo] = useState({
        firstId: {
            title:'',
            place: '',
            start:'',
            end:'',
            degree:'',
        }
    });
    const next = () =>{
        props.history.push('/form/Skills')
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(info);
        next();
    }
    const addNewEducationPlace = (id) =>{
        setEducationCounter([...educationCounter , id ]);
    }
    const removeEducationPlace = () =>{
        let id = educationCounter[educationCounter.length-1]
        let tempEducationCounter =educationCounter;
        educationCounter.pop();
        let tempInfo = info;
        delete tempInfo[id];
        setInfo({...tempInfo});
        setEducationCounter([...tempEducationCounter]);
    }
    const handleTypeChange = (id , obj) => {
        setInfo({...info , [id] : obj });
        console.log(info);
    }

    const title='Education';
    const header='Enter your Education Details'


    return (
        <FormWraper title={title} header={header}>
            <form onSubmit={handleSubmit}>
            <li>
                {
                    educationCounter.map(place =>(
                        <EducationPlace key={place} id={place} handleTypeChange={handleTypeChange}/> 
                    ))
                }
            </li>
            <li>
            <div className='buttons-div'>
                    <IconButton onClick={()=>addNewEducationPlace(uuidv4())}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton onClick={removeEducationPlace}>
                        <RemoveIcon/>
                    </IconButton>
                </div>
            </li>
            <li>
                <Button type='submit' variant="contained" color="primary">
                    Next  <i className="material-icons">navigate_next</i>
                </Button>
            </li>
        </form>
        </FormWraper>
    )
}
