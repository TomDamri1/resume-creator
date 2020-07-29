import React ,{useState}from 'react'
import Button from '@material-ui/core/Button';
import FormWraper from '../FormWraper'
import WorkPlace from './WorkPlaces/WorkPlace'
import uuidv4 from 'uuid/v4';
import {card_lg} from '../../consts';
import AddRemoveButtonBar from '../AddRemoveButtonBar';

/**
 * gets from the user:
 * 
 *  - employment history
 */
function FormEmploymentHistory(props) {
    const {context} = props;
    const firstId='firstId';
    const [info , setInfo] = useState({
        firstId : {
            title : undefined,
            place : '',
            start : '',
            end : '',
        },
    });
    const [WorkPlacesCounter , setWorkPlacesCounter] = useState([
        firstId,
    ]);
    const next = () =>{
        //props.history.push('/Resume')
        props.history.push('/form/EducationDetails')
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        context.setEmploymentHistory(info)
        next();
    }
    const addNewWorkPlace = (id) =>{
        setWorkPlacesCounter([...WorkPlacesCounter , id ]);
    }
    const removeWorkPlace = () =>{
        let id = WorkPlacesCounter[WorkPlacesCounter.length-1]
        let tempWorkPlacesCounter =WorkPlacesCounter;
        tempWorkPlacesCounter.pop();
        let tempInfo = info;
        delete tempInfo[id];
        setInfo({...tempInfo});
        setWorkPlacesCounter([...tempWorkPlacesCounter]);
    }
    const handleTypeChange = (id , obj) => {
        console.log(info);
        setInfo({...info , [id] : obj });
        console.log(info);
    }
    const title='Employment History Details';
    const header='Enter your Employment History Details'
    return (
        <FormWraper title={title} header={header} width={card_lg}>
        <form onSubmit={handleSubmit}>
            <li>
                {
                    WorkPlacesCounter.map(place =>(
                        <WorkPlace key={place} id={place} handleTypeChange={handleTypeChange}/> 
                    ))
                }
            </li>
            <li>
                <AddRemoveButtonBar 
                    addFunction={()=>addNewWorkPlace(uuidv4())}
                    removeFunction={removeWorkPlace}
                    marginLeft={500} 
                    marginTop={10}
                />
            </li>
            <li>
                <Button type='submit' variant="contained" color="primary">
                    Next  <i className="material-icons">navigate_next</i>
                </Button>
            </li>
        </form>
        <Button onClick={() => {alert(JSON.stringify(info))}}>XXXX</Button>
        </FormWraper>
    )
}

export default FormEmploymentHistory
