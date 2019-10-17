import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import FormWraper from './FormWraper'


function GetStarted(props) {
    const getStarted = () =>{
        props.history.push('/form/basicDetails')
    }
    const title = "Tom's Resume Creator";
    const header = "Upgrade your Resume free of charge!"
    
    return (       
        <FormWraper 
            title={title}
            header={header}
        >
        <Link to='/form/basicDetails' style={{textDecoration: 'none'}}>
            <Button onClick={getStarted} color='primary' size="small">
                    Get Started!
            </Button>
        </Link>
        </FormWraper>
    )
}


export default GetStarted;