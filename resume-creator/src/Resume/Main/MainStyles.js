import { makeStyles } from '@material-ui/core/styles';
/**
 * 
 * gets the amount of skills and lanuagages
 * returns makeStyles funcion based on it.
 */
const [profileSize , historySize, educationSize] = [5,4,5]
const useStyles = makeStyles({
    root: {
        
        backgroundColor: '#656694',
        margin:'auto',
        height:'100%',
        width:'100%',
        display:'grid',
        gridTemplateColumns: '1fr',
        gridAutoRows: `${profileSize}fr ${historySize}fr ${educationSize}fr`,
        gridGap:'1em',
    },
    profile:{
        backgroundColor:'#7a56bf',
        alignItems:'center'
    },
    history:{
        backgroundColor:'#8a6fbf',
    },
    education:{
        backgroundColor:'#9984c2',
    },


})


  export default useStyles;