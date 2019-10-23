import React from 'react'
const iconStyle ={
    width:20,
    height:20,
    margin:20,
}


export default function MainHeader(props) {
    const {img , text} = props;
    return (
        <div style={{display:'flex'}}>
            <img src={img} alt={text} style={iconStyle}/>
            <h3>{text}</h3>
        </div>
    )
}
