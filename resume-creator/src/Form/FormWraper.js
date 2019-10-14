import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './Styles/FormWraperStyles';

export default function FormWraper(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.title}
        </Typography>
        <Typography variant="h5" component="h2">
            {props.header}
        </Typography>
            {props.children}
      </CardContent>
    </Card>
  );
}