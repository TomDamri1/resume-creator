import React from 'react'
const iconStyle ={
    width:5,
    height:5,
    padding:0,
    marginTop:28,
    borderRadius:'50%',
    border:'1px solid black',
    
    
}
const iconStyleLeft ={
    width:5,
    height:5,
    padding:0,
    marginTop:28,
    marginLeft:60,
    borderRadius:'50%',
    border:'1px solid black',
    
    
}
const containerStyle={
    display:'flex',
    justifyContent:'spcae-between',
    marginLeft:-10,
    marginTop:-10
    
    
}


export default function MainHeader(props) {
    const {text} = props;
    return (
        <div style={containerStyle}>
            <div style={{flex:1, float: 'right'}}>
                <section style={iconStyleLeft}/>
            </div>
            <div style={{flex:1}}>
                <h4 style={{marginLeft:-20}}>{text}</h4>
            </div>
            <div style={{flex:1}}>
                <section style={iconStyle}/>
            </div>  
        </div>
    )
}
