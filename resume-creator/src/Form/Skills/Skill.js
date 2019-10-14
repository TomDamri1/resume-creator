import React from 'react';
import Slider from '@material-ui/core/Slider';
import { TextField } from '@material-ui/core';
import useSkill from '../../hooks/useSkill';

function Skill() {
    const [skill , setSkill] = useSkill();
    const handleChange= (e) => {
        setSkill({...skill , 
            [e.target.name] : e.target.value});
    }
    const handleLevelChange = (e,val) => {
        setSkill({...skill , 
            level : val});
    }
    return (
        <div style={{marginTop:'10em'}}>
            <TextField
                name='type'
                id="outlined-type"
                label=""
                margin="normal"
                variant="outlined"
                value={skill.type}
                onChange={handleChange}
            />
            <Slider
                name='level'
                margin="normal"
                defaultValue={50}
                onChange={handleLevelChange}
                getAriaValueText={(valuetext) => (valuetext)}
                aria-labelledby="discrete-slider-always"
                step={1}
                valueLabelDisplay="on"
                style={{marginTop:'30px', marginLeft:'15px', width: 200}}
            />
        </div>
    )
}

export default Skill
