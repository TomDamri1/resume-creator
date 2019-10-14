import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { CardContent, } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history'
import {Link} from 'react-router-dom'
import FormWraper from './FormWraper'


function GetStarted() {
    const getStarted = () =>{
        let _history = createBrowserHistory();
        _history.push('/form/basicDetails')
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