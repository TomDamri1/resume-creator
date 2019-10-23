import React from 'react'

const barWidth = 200;
const barHeight = 200;
const outerBar = {
    width : barWidth , 
    height : 5 , 
    backgroundColor : '#EEEEEE'
}
const innerBar = {
    width : barWidth , 
    height : 5 , 
    backgroundColor : '#212121'
}
export default function SkillBar(props) {
    const {type , level} = props
    return (
        <div style={{ marginBottom: 20 , marginRight:5}}>
            <div className='skillName' style={{marginBottom:5}}>
                {type}
            </div>
            <div style={outerBar}>
                <div style={{...innerBar , width:`${level}%`}}>

                </div>
            </div>
        </div>
    )
}
