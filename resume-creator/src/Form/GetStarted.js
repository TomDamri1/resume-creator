import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { CardContent, } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history'
import {Link} from 'react-router-dom'

const styles = {
    card: {
      minWidth: 275,
      maxWidth: 675,
      margin: 'auto',
      marginTop: '4em',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    header:{
        marginBottom: '3rem'        
    },
    link:{
        textDecoration: 'none'
    },
  };

export class GetStarted extends Component {
    getStarted = () =>{
        let _history = createBrowserHistory();
        _history.push('/form/userdetails')
    }
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Tom's Resume Creator
                </Typography>
                <Typography className={classes.header} variant="h5" component="h2">
                    Create your Resume free of charge!
                </Typography>
                <Link to='/form/userdetails' className={classes.link}>
                    <Button onClick={this.getStarted} color='primary' size="small">
                            Get Started!
                    </Button>
                </Link>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(GetStarted)
