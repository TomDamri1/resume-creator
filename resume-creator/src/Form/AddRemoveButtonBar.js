import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function AddRemoveButtonBar(props) {
    const addFunction = ()=>{
        props.addFunction()
    }
    return (
        <div className='buttons-div' style={{marginLeft: props.marginLeft , marginTop:props.marginTop}}>
            <IconButton onClick={addFunction}>
                <AddIcon/>
            </IconButton>
            <IconButton onClick={props.removeFunction}>
                <RemoveIcon/>
            </IconButton>
        </div>
    )
}
