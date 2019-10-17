import React from 'react';
import Slider from '@material-ui/core/Slider';
import { TextField } from '@material-ui/core';
import useSkill from '../../hooks/useSkill';
function Skill(props) {
    const [skill , setSkill] = useSkill();
    const handleChange= (e) => {
        setSkill({...skill , 
            [e.target.name] : e.target.value,});
        props.onTypeChange(props.id , e.target.value)
        console.log(e.target.value)
    }
    const handleLevelChange = (e,val) => {
        setSkill({...skill , 
            level : val});
        props.onLevelChange(props.id , val)
    }
    return (
        <div style={{marginTop:'1em'}}>
            <TextField
                name='type'
                id="outlined-type"
                label={props.label}
                margin="normal"
                value={skill.type}
                onChange={handleChange}
            />
            <Slider
                name='level'
                margin="normal"
                defaultValue={0}
                onChange={handleLevelChange}
                getAriaValueText={(valuetext) => (valuetext)}
                aria-labelledby="discrete-slider-always"
                step={1}
                color={skill.used ? 'primary' : 'secondary'}
                valueLabelDisplay='on'
                style={{marginTop:'30px', marginLeft:'15px', width: 200}}
            />
            
            
        </div>
    )
}

export default Skill
