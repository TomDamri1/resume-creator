import React, { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { TextField } from '@material-ui/core';
import useSkill from '../../hooks/useSkill';
function Skill(props) {
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    useEffect(() => {
        console.log("effected")
        props.handleChange(props.id, { type: name, level: level })
    }, [name, level])

    const handleChange = (e) => {
        console.log("x")
        setName(e.target.value);
    }
    const handleLevelChange = (e, val) => {
        console.log("x")
        setLevel(val);
        console.log(val)
    }
    return (
        <div style={{ marginTop: '1em' }}>
            <TextField
                name='type'
                id="outlined-type"
                label={props.label}
                margin="normal"
                value={name}
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
                color={level !== 0  ? 'primary' : 'secondary'}
                valueLabelDisplay='on'
                style={{ marginTop: '30px', marginLeft: '15px', width: 200 }}
            />


        </div>
    )
}

export default Skill
